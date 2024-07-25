import { useCanvas } from "@/app/hooks/canvasHook";
export default function JuliaCanvas({
  draw,
  xRes,
  yRes,
  maxWidth,
  maxHeight,
  className,
  id,
}) {
  const canRef = useCanvas(draw);
  let styWidth = 1000;
  let styHeight = maxHeight;

  if (styWidth / styHeight >= xRes / yRes) {
    styWidth = (styHeight * xRes) / yRes;
  } else if (styWidth / styHeight < xRes / yRes) {
    styHeight = (styWidth * yRes) / xRes;
  }

  // }
  const style = { width: styWidth, height: styHeight };
  return (
    <>
      <canvas
        style={style}
        ref={canRef}
        className={className}
        id={id}
        width={xRes}
        height={yRes}
      />
      <a
        href="#"
        id="down"
        onClick={(e) => {
          e.preventDefault();
          var link = document.createElement("a");
          link.download = "fractal.png";
          link.href = canRef.current.toDataURL();
          link.click();
        }}
      >
        Download
      </a>
    </>
  );
}
