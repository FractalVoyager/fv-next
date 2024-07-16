import { Form, Button } from "react-bootstrap";
import TextBoxControl from "../TextBoxControl";

const textBoxNames = [
  { name: "Real Axis Min Value", param: "realMin" },
  { name: "Real Axis Max Value", param: "realMax" },
  { name: "Imaginary Axis Min Value", param: "imgMin" },
  { name: "Imaginary Axis Max Value", param: "imgMax" },
  { name: "Imaginary Axis Resolution", param: "imagAxisRes" },
];
export default function AxesAndHides({
  tmpParams,
  setTmpParams,
  setShowCords,
  setShowFrac,
  showCords,
  showFrac,
}) {
  const updateParams = (newVal, param) => {
    setTmpParams({
      ...tmpParams,
      [param]: newVal !== "" ? Number(newVal) : "",
    });
  };

  return (
    <Form>
      <Form.Group>
        {textBoxNames.map((obj) => (
          <TextBoxControl
            displayName={obj.name}
            val={tmpParams[obj.param]}
            updateParam={(newVal) => updateParams(newVal, obj.param)}
            disabled={tmpParams.type === 2}
          />
        ))}
      </Form.Group>
      {showCords ? (
        <>
          <Button
            variant="primary"
            onClick={() => setShowCords((prev) => !prev)}
          >
            Hide Complex Number
          </Button>
        </>
      ) : (
        <Button variant="primary" onClick={() => setShowCords((prev) => !prev)}>
          Show Complex Number
        </Button>
      )}
      {showFrac ? (
        <>
          <Button
            variant="primary"
            onClick={() => setShowFrac((prev) => !prev)}
          >
            Hide Fractal on Orbit Drag
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="primary"
            onClick={() => setShowFrac((prev) => !prev)}
          >
            Show Fractal on Orbit Drag
          </Button>
        </>
      )}
    </Form>
  );
}
