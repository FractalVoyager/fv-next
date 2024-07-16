import Btn from "../formElements/btn";

export default function PansAndZooms({ tmpParams, handleZoom, handlePan }) {
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
        />
      ))}
    </>
  );
}
