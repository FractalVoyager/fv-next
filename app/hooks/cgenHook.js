// importing create module from main.mjs when is generated by running the makefile in the cgen folder
// it is an emscripten wasm function to create the wasm module that is compiled
import createModule from "../cgen/main.mjs";
import { useState, useEffect, useRef } from "react";
import { useTermStore, useCompileStore } from "../store/zustandTest.js";
/*
parameters: script - the text of the script typed in the box
description: returns the cgened code from the script, and updates the cgened code on change of script
this hook uses wasm. the wasm used is a web assembly compiled version of the cgen code that uses antlr and c++
it uses emscripten - more details are provided in the comments in cgen
*/
const useCgen = (script) => {
  // * global state *//

  // fcns to write to terminal
  const write = useTermStore((state) => state.write);
  const quickWrite = useTermStore((state) => state.quickWrite);
  // fcn to set intial type of fractal
  const setInitialType = useCompileStore((state) => state.setInitialType);
  // reference to module created to interact with wasm
  const myMod = useRef(null);
  // reference to cgen fcn which is a wasm function
  const cgen = useRef(null);
  // reference to getCgen which is a wasm function
  const getCgen = useRef(null);

  // * local state * //

  // code generated
  const [code, setCode] = useState(null);

  // * useEffect *//
  // called on change of script
  useEffect(() => {
    // function to create wasm module, and create the fcns
    const myCreateModule = async () => {
      // call imported create module
      createModule().then((Module) => {
        // create cgen fcn and sets to ref which is exported
        // it takes the script, generates the cgen code, and returns the length of that code
        cgen.current = Module.cwrap("cgen", "number", [
          "string", // script
        ]);
        // getCgen takes a string pointer and populates it with the cgened code, and returns the initial type
        getCgen.current = Module.cwrap("getCgen", "number", [
          "number", // string pointer
        ]);

        myMod.current = Module;
      });
      // if there is a script, call myCgen to run fcns
      if (script) {
        myCgen();
      }
    };

    // function to run both wasm fcns
    const myCgen = async () => {
      quickWrite("Compiling script to c++...");
      let length;
      // try to create cgen and get length, if error, display to terminal - probably malformed script
      try {
        length = await cgen.current(script.toLowerCase());
      } catch (err) {
        setTimeout(
          () =>
            write(
              "Complication to c++ failed, script is not a proper fractalStream language script.",
              "red",
              false
            ),
          1
        );

        // TODO set timeouts for writes next to each are annoying but nesseary for now
        setTimeout(
          () =>
            quickWrite(
              " Specific error handling of this type is not currently suppored, please check the language doccumentation."
            ),
          1
        );
      }
      // create string pointer on wasm memory
      let strPtr = myMod.current.allocateUTF8(length);
      // call fcn to get type and populate pointer
      let type = await getCgen.current(strPtr);
      // set the initial type
      setInitialType(type);
      write("Compiled", "lightgreen", true);
      // get code off wasm memory and set it
      setCode(myMod.current.UTF8ToString(strPtr).trim());
      // free the wasm memory
      myMod.current._free(strPtr);
    };

    // TODO I should only need to call create module once (worked in more simple wasms), for now, just call create module everytime
    // NOT WORKING to have module stick around even though it is in old version because memeory overflow in wasm on this line     FractalParser::ScriptContext* tree = parser.script();
    myCreateModule();
  }, [script]);
  // return the code
  // console.log(code);
  return code;
};

export { useCgen };
