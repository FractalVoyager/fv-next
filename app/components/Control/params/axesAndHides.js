import { Form, Button } from "react-bootstrap";
import TextBox from "../formElements/textBox";
import ShowHideButton from "../formElements/showHideButton";

const textBoxNames = [
  { name: "Real Axis Min Value", param: "realMin" },
  { name: "Real Axis Max Value", param: "realMax" },
  { name: "Imaginary Axis Min Value", param: "imgMin" },
  { name: "Imaginary Axis Max Value", param: "imgMax" },
  { name: "Imaginary Axis Resolution", param: "imagAxisRes" },
];

// could move showCords and showFrac to here, but then would have
// to make it global state and pass to viewer component
export default function AxesAndHides({
  tmpParams,
  setTmpParams,
  setShowCords,
  setShowFrac,
  showCords,
  showFrac,
}) {
  const buttons = [
    { name: "Complex Number", state: showCords, setState: setShowCords },
    { name: "Fractal on Orbit Drag", state: showFrac, setState: setShowFrac },
  ];

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
          <TextBox
            displayName={obj.name}
            val={tmpParams[obj.param]}
            updateParam={(newVal) => updateParams(newVal, obj.param)}
            disabled={tmpParams.type === 2}
          />
        ))}
      </Form.Group>
      {buttons.map((obj) => (
        <ShowHideButton
          displayName={obj.name}
          shouldShow={obj.state}
          setShow={obj.setState}
        />
      ))}
    </Form>
  );
}
