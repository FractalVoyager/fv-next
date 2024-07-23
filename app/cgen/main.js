// https://tomassetti.me/listeners-and-visitors/
// https://tomassetti.me/getting-started-antlr-cpp/

/* 
this is the main cpp file that creates the parser and visitors and such, and calls classes and functions to create the cgen
other files not auto generated are Fractal.g4 (language defn), and MyVisitor.h which is my custom visitor pattern, and the make file
to generate the autogenerated files which create the tree - run 
export CLASSPATH=".:/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH"
alias antlr4='java -Xmx500M -cp "/usr/local/lib/antlr-4.7.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool'
antlr4 -Dlanguage=Cpp Fractal.g4 -visitor -no-listener
Running these will recreate all of the base visitor and fractal vistiors. This will get rid of the return types that may have been overridden in those files
to build the main.mjs and main.wasm files that are a compilation of these files to wasm, run make in this folder, be sure to chagne the relative 
path to the build of the correct version of antlr4 
*/
import antlr4 from "antlr4";
import FractalLexer from "./FractalLexer.js";
import FractalParser from "./FractalParser.js";
import MyVisitor from "./MyVisitor.js";

let outputCode;
let type;

function cgen(stream) {
  // turn the input into antlr format
  const input = new antlr4.InputStream(stream);
  // creaate lexer, get tokens, parse
  const lexer = new FractalLexer(input);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new FractalParser(tokens);
  // call script method - this scriptContext contains method to access the text caputred by the rule
  const tree = parser.script();
  // create the my visiotr class
  const visitor = new MyVisitor();

  // generate headers
  const headers =
    "#include <math.h>\n#include <cmath>\n#include <stdint.h>\n#include <complex.h>\n#include<stdio.h>\n#include <emscripten/emscripten.h>\n";
  // generate defns
  const defns =
    // this is the fcn to claculate a pixle in param or dyn plane - onle need one because z is always set to 0 unless there is a set in script
    "int calcPixel(double z_re, double z_im, double c_re, double c_im, int maxIters, double minRadius, double maxRadius, int type, double epsilon);\n" +
    // get index in array
    "int getIdx(int x, int y, int width, int color);\n";

  // "main" (big loops) fcn
  const bigLoops =
    // fcn defn
    // this is the main fcn that gets called from js
    // only need these fixed vars for clicked on dyn
    "EMSCRIPTEN_KEEPALIVE void genPixles(int type, double fixed_re, double fixed_im, int maxIters, double epsilon, double minRadius, double maxRadius, double startX, double startY, double newCanWidth, double newCanHeight, int width, int height, double widthScale, double heightScale, uint8_t *ptr, int numColors, uint8_t *redPtr, uint8_t *greenPtr, uint8_t *bluePtr)\n{\n" +
    // for loops through the section of canvas we are drawing on - and calcuate the complex number based on the current place we are on the screen
    "for (int x = 0; x < floor(newCanWidth); x++){\nfor (int y = 0; y < floor(newCanHeight); y++){\n double screen_re = (((widthScale * x) + startX) - width / 2.) / (width  /2.);\ndouble screen_im = -(((heightScale * y) + startY) - height /2.) / (height /2.);\n" +
    // calc iterations                            // if param - z is (0,0) and c to change fcn is screen vals                                                               // if dyn - z is screen values to get iterated, and c to change fcn is fixed points
    "int iterations;\nif(type == 0) {\niterations = calcPixel(0.,0.,screen_re,screen_im, maxIters, minRadius, maxRadius, type, epsilon);\n} else if(type == 1) {\niterations = calcPixel(screen_re, screen_im, fixed_re, fixed_im, maxIters, minRadius, maxRadius, type, epsilon);\n}\n" +
    // get the color number based on how many colors we have and what we got for iterations
    "int color = ceil((double)iterations*numColors/maxIters);\n" +
    // set the place in array based on color/iterations
    "ptr[getIdx(x, y, width, 0)] = redPtr[color];\nptr[getIdx(x, y, width, 1)] = greenPtr[color];\nptr[getIdx(x, y, width, 2)] = bluePtr[color]; \nptr[getIdx(x, y, width, 3)] = 255;\n}\n}\n}\n";
  // generate getIdx
  const getIdx =
    "int getIdx(int x, int y, int width, int color){\nint red = y * (width * 4) + x * 4;\nreturn red + color;\n}\n";

  // this is the function to generate the calcPixles functions bassed on the script - we pass in the genrated parse tree
  const codeBody = visitor.cgen(tree);
  // generate orbit based on the script/parse tree made from it
  const orbit = visitor.cgenOrbit(tree);
  const tmp =
    headers +
    defns +
    getIdx +
    codeBody +
    'extern "C" {\n' +
    bigLoops +
    orbit +
    "}\n";
  outputCode = tmp;
  // get the initla type of fractal that is stored in the visitor class and set it to a vaiable here
  type = visitor.getType();
  // return the length
  // console.log(outputCode);
  // return outputCode.length + 1;
  return { code: outputCode, type: type, errors: [] };
}

export { cgen };
