"use client";
// reference : https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

// this should just be for creating the canvas and updating it with state in viewComponent
// by calling useCanvas

import { useEffect } from "react";
import { useCanvas } from "../../hooks/canvasHook";
import { useFracRefStore, useCanStyleStore } from "../../store/zustandTest";

/*
props:
draw: function to be drawn on canvas
xRes, yRes: height and width of the canvas (this is different than css height and widths)
maxWidth, maxHeight: css values the outer component, max values the canvses can be 
className, id: names for the canvas elements
options: storke style and stroke width for drawn zoom boxes
mouseDown, mouseMove, mouseUp: functions for those events on the canvas, these are props becuase 
they use state that is held in the parent component 
returns: the canvas
description: calucates size of canvas and returns, calls the useCanvas hook to draw onto the canvas
 */
export default function Canvas({
  draw,
  xRes,
  yRes,
  maxWidth,
  maxHeight,
  className,
  id,
  options,
  mouseDown,
  mouseMove,
  mouseUp,
}) {
  // gets the ref for can and calls draws on the canvas with useCanvas
  const canRef = useCanvas(draw, options);

  // silly fix to set a ref for the canvas which is drawing the fractals - uses global store - can use forward ref instead
  const updateFracRef = useFracRefStore((state) => state.update);
  if (id === "fracCan") {
    setTimeout(() => {
      updateFracRef(canRef);
    }, 10);
  }

  const setWidth = useCanStyleStore((state) => state.setWidth);

  // math for css size of canvas
  // NOTE: these will only change when xRes/yRes change, so when we just box zoom,
  // it doesn't change those values, so the actaul size of the canvas doesn't update,
  // when we reset the axises in control, the xRes and yRes are adjusted for those demensions
  // so the ratio size of the actual canvas changes here
  let styWidth = document.documentElement.clientWidth - 400;
  let styHeight = maxHeight;

  // console.log("starting w,h ", styWidth, styHeight);

  // console.log("bounding height", styHeight);
  // console.log("bounding width", styWidth);

  // HERES WHERE THERES SOME REAL DECISIONS TO BE MADE ...
  /*
    - rn we are going beyond the bounidng width and then pushing the controls further to the right
    - want to make this very repsonsive (remember you can set dims of can) - sometimes might want to controls above canvas (not jsut dependent on screen dims because of setting can dims)
  */
  // TODO the new way of doing this doesn't work if whole page is longer than it is wide
  if (styWidth / styHeight >= xRes / yRes) {
    styWidth = (styHeight * xRes) / yRes;
  } else if (styWidth / styHeight < xRes / yRes) {
    styHeight = (styWidth * yRes) / xRes;
  }

  // }
  const style = { width: styWidth, height: styHeight };

  // for some random but consistent values for height and width...
  // the app just imediately crashed, this fixes it for some odd reason
  // this also brakes the terminal expanding and collapsing chagning the size of the canvas
  // setTimeout(() => {
  // TODO test --- I don' think this brakes it
  useEffect(() => {
    setWidth(styWidth);
  }, [styWidth]);
  // }, 1);

  // the ref will have the drawn fractal
  return (
    <canvas
      style={style}
      ref={canRef}
      className={className}
      id={id}
      width={xRes}
      height={yRes}
      onMouseDown={(e) => mouseDown(e)}
      onMouseMove={(e) => mouseMove(e)}
      onMouseUp={(e) => mouseUp(e)}
    />
  );
}
