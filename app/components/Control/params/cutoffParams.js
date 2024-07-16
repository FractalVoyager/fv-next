import { Form } from "react-bootstrap";
import TextBox from "../formElements/textBox";

const textBoxNames = [
  { name: "Max Radius", param: "maxRad" },
  { name: "Min Radius", param: "minRad" },
  { name: "Epsilon", param: "epsilon" },
  { name: "Max Iterations", param: "maxIters" },
];

export default function CuttoffParams({ tmpParams, setTmpParams }) {
  const updateParams = (newVal, param) => {
    setTmpParams({
      ...tmpParams,
      [param]: newVal,
    });
  };
  return (
    <Form>
      {textBoxNames.map((obj) => (
        <Form.Group>
          <TextBox
            displayName={obj.name}
            val={tmpParams[obj.param]}
            updateParam={(newVal) => updateParams(newVal, obj.param)}
            disabled={tmpParams.type === 2}
          />
        </Form.Group>
      ))}
    </Form>
  );
}
