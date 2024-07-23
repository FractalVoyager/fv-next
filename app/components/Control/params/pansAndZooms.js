import Btn from "../formElements/btn";
import { axesToParams } from "@/app/util/util";
import { useTmpParamsStore } from "@/app/store/zustandTest";

export default function PansAndZooms({ tmpParams, params, setParams }) {
  const setAxises = useTmpParamsStore((state) => state.setAxises);

  // handles a pan left/right/up/down
  // for each case, the new start is calculated, then props updated,
  // and the tmpParamsStore is updated with setAxises
  function handlePan(direction) {
    let height = tmpParams.imgMax - tmpParams.imgMin;
    let width = tmpParams.realMax - tmpParams.realMin;
    let newRealMax = tmpParams.realMax;
    let newRealMin = tmpParams.realMin;
    let newImgMax = tmpParams.imgMax;
    let newImgMin = tmpParams.imgMin;

    switch (direction) {
      case "left":
        newRealMax = tmpParams.realMax - width / 2;
        newRealMin = tmpParams.realMin - width / 2;
        break;

      case "right":
        newRealMax = tmpParams.realMax + width / 2;
        newRealMin = tmpParams.realMin + width / 2;
        break;

      case "up":
        newImgMax = tmpParams.imgMax + height / 2;
        newImgMin = tmpParams.imgMin + height / 2;
        break;

      case "down":
        newImgMax = tmpParams.imgMax - height / 2;
        newImgMin = tmpParams.imgMin - height / 2;
        break;

      default:
        return;
    }

    let { scaleX, scaleY, startX, startY } = axesToParams(
      newImgMax,
      newImgMin,
      newRealMax,
      newRealMin,
      params.x,
      params.y
    );

    setParams({
      ...params,
      startX: startX,
      startY: startY,
      scaleX: scaleX,
      scaleY: scaleY,
    });

    setAxises(newRealMin, newRealMax, newImgMin, newImgMax);

    return;
  }

  // handles zooms, sets the params to the new calculated zoom, and updates tmpParamsStore to it as well
  function handleZoom(zoomIn) {
    let height;
    let width;
    let newRealMax;
    let newRealMin;
    let newImgMax;
    let newImgMin;

    if (zoomIn) {
      height = (tmpParams.imgMax - tmpParams.imgMin) / 2;
      width = (tmpParams.realMax - tmpParams.realMin) / 2;
      newRealMax = tmpParams.realMax - width / 2;
      newRealMin = tmpParams.realMin + width / 2;
      newImgMax = tmpParams.imgMax - height / 2;
      newImgMin = tmpParams.imgMin + height / 2;
    } else {
      // math for zooming out
      height = (tmpParams.imgMax - tmpParams.imgMin) * 2;
      width = (tmpParams.realMax - tmpParams.realMin) * 2;
      newRealMax = tmpParams.realMax + width / 4;
      newRealMin = tmpParams.realMin - width / 4;
      newImgMax = tmpParams.imgMax + height / 4;
      newImgMin = tmpParams.imgMin - height / 4;
    }

    let { scaleX, scaleY, startX, startY } = axesToParams(
      newImgMax,
      newImgMin,
      newRealMax,
      newRealMin,
      params.x,
      params.y
    );

    setParams({
      ...params,
      scaleX: scaleX,
      scaleY: scaleY,
      startX: startX,
      startY: startY,
    });

    setAxises(newRealMin, newRealMax, newImgMin, newImgMax);
  }

  const pansAndZooms = [
    { name: "+", handler: () => handleZoom(true) },
    { name: "-", handler: () => handleZoom(false) },
    { name: "left", handler: () => handlePan("left") },
    { name: "right", handler: () => handlePan("right") },
    { name: "up", handler: () => handlePan("up") },
    { name: "down", handler: () => handlePan("down") },
  ];
  return (
    <>
      {pansAndZooms.map((obj) => (
        <Btn
          displayName={obj.name}
          setParam={obj.handler}
          disabled={tmpParams.type === 2}
          key={obj.name}
        />
      ))}
    </>
  );
}
