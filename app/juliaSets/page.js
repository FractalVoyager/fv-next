"use client";
import { useCalcJuliasStore, useCompileStore } from "../store/zustandTest";
import { useState, useEffect, useRef } from "react";
import { canvasToComplex } from "../util/util";
import { genOneJulia, genJulias } from "../hooks/emceptionHooks";
import JuliaCanvas from "../components/Viewer/genedJuliaCanvas";
import DownloadDataBtn from "./downloadData";

export default function JuliaSetsPage({}) {
  const drawJulia = (pixles) => (ctx) => {
    ctx.fillStyle = "black";
    let width = Math.sqrt(pixles.length);
    pixles.forEach((val, idx) => {
      if (val === 1) {
        let y = idx / width;
        let x = idx % width;
        ctx.fillRect(x, y, 1, 1);
      }
    });
    // ctx.putImageData(pixles, 0, 0);
  };
  // line that we will generate from
  // TODO - change back to const
  const linePoints = useCalcJuliasStore((state) => state.finalLinePoints);
  const genParams = useCalcJuliasStore((state) => state.params);
  // const linePoints = [
  //   [285, 343],
  //   [285, 342],
  //   [285, 341],
  //   [285, 340],
  //   [285, 338],
  //   [285, 337],
  //   [286, 335],
  //   [287, 332],
  //   [288, 329],
  // ];

  // wasm code that will generate the julia sets from
  const content = useCompileStore((state) => state.content);

  // local state of the juliaSets
  const [juliaSets, setJuliaSets] = useState(null);

  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null); // Reference to store timer interval

  if (!linePoints || !genParams || !content) {
    console.log("NOT IT", linePoints, genParams);
    return (
      <div>
        Draw a line on paramter plane, then click line options, the generate
        julia sets
      </div>
    );
  }

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  // useEffect to calculate the julia sets
  useEffect(() => {
    // have a list of line points and need to get re, im from each one
    // then, need to call emception and get list of pixle arrays
    // then, need to convert to black and white
    // in the future, converting to black and white should probably be done in wasm
    // or just have a wasm that gets just list of corods or something
    // for now, this should work
    // todo - do something with option or just force remove duplicates
    // genParams is same as genPixlesgenParams in viewer component

    const processPoints = async () => {
      let newPoints = linePoints.map((point) => {
        let canX =
          genParams.widthScale *
            (point[0] * (genParams.xRes / genParams.clientWidth)) +
          genParams.startX;
        let canY =
          genParams.heightScale *
            (point[1] * (genParams.yRes / genParams.clientHeight)) +
          genParams.startY;

        let [re, im] = canvasToComplex(
          canX,
          canY,
          genParams.xRes,
          genParams.yRes
        );
        return [re, im];
      });
      let pixels = await genJulias(
        content,
        newPoints,
        genParams.maxIters,
        genParams.epsilon,
        genParams.minRadius,
        genParams.maxRadius,
        genParams.startX,
        genParams.startY,
        genParams.newCanWidth,
        genParams.newCanHeight,
        genParams.canWidth,
        genParams.canHeight,
        genParams.widthScale,
        genParams.heightScale,
        genParams.arrayLength / 4
      );
      console.log("new pixels", pixels);
      setJuliaSets(pixels);
    };

    const oldProcessPoints = async () => {
      const pixleProms = linePoints.map(async (point) => {
        // get re, im
        // math for conversion so can call canvas to complex to get the complex values for currently at spot
        let canX =
          genParams.widthScale *
            (point[0] * (genParams.xRes / genParams.clientWidth)) +
          genParams.startX;
        let canY =
          genParams.heightScale *
            (point[1] * (genParams.yRes / genParams.clientHeight)) +
          genParams.startY;

        let [re, im] = canvasToComplex(
          canX,
          canY,
          genParams.xRes,
          genParams.yRes
        );
        console.log(re, im);
        let pixles = await genOneJulia(
          content,
          re,
          im,
          genParams.maxIters,
          genParams.epsilon,
          genParams.minRadius,
          genParams.maxRadius,
          genParams.startX,
          genParams.startY,
          genParams.newCanWidth,
          genParams.newCanHeight,
          genParams.canWidth,
          genParams.canHeight,
          genParams.widthScale,
          genParams.heightScale,
          genParams.arrayLength / 4
        );
        return pixles;
      });

      const pixleArrs = await Promise.all(pixleProms);
      // console.log(pixleArr, "OLD");
      // setJuliaSets(pixleArr);

      // todo, do this one when first get them instead of redoing the whole array
      // let newPixles = pixleArr.map((arr) => {
      //   let pixles = arr.data;
      //   let newPixles = new Uint8ClampedArray(pixles.length);
      //   let i = 0;
      //   while (i < pixles.length) {
      //     if (pixles[i] === 0 && pixles[i + 1] === 0 && pixles[i + 2] === 0) {
      //       console.log("cauthh!!!");
      //       newPixles[i] = 0;
      //       newPixles[i + 1] = 0;
      //       newPixles[i + 2] = 0;
      //     } else {
      //       newPixles[i] = 255;
      //       newPixles[i + 1] = 255;
      //       newPixles[i + 2] = 255;
      //     }
      //     newPixles[i + 3] = 255;
      //     i = i + 4;
      //   }

      //   return new ImageData(
      //     newPixles,
      //     genParams.canWidth,
      //     genParams.canHeight
      //   );
      // });
      setJuliaSets(pixleArrs);

      // console.log(newPixles, "NEW");
      // return newPixles;
    };

    processPoints(linePoints, genParams, content);
  }, [linePoints, genParams, content]);

  // if (juliaSets) {
  //   stopTimer(); // Stop the timer when all promises are resolved
  // }

  // console.log(juliaSets, "JULIA SETS");
  if (!juliaSets) {
    return (
      <>
        <div>Working on it...</div>
      </>
    );
  } else
    return (
      <>
        <div>done {juliaSets.length}</div>
        <DownloadDataBtn data={juliaSets} />
        {/* {juliaSets.map((pixelArr, idx) => (
          <JuliaCanvas
            className="juliaCanvas"
            draw={drawJulia(pixelArr)}
            xRes={genParams.xRes}
            yRes={genParams.yRes}
            maxWidth={genParams.clientWidth}
            maxHeight={genParams.clientHeight}
            id={"juliaCan" + idx}
            key={idx}
          ></JuliaCanvas>
        ))} */}
      </>
    );
}
