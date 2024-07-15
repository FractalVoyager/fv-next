"use client";
import "./global.css";
import { useInitEmception } from "./hooks/emceptionHooks";
import Control from "./components/Control/controlComponent";
import Terminal from "./components/Console/myTermComponent";

/*
Main app component, initializes emcetion (c++ to wasm in browser compiler) - 
done here because want to do it as soon as possible, returns Control conomponent 
(viewer and options) and terminal component
Wrapped in page container that is max vh for styling 
*/
export default function Home({}) {
  useInitEmception();

  return (
    <>
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <div id="page-container">
        <Control />
        <Terminal />
      </div>
    </>
  );
}
