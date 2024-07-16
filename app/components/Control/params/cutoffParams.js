import { Form } from "react-bootstrap";
import TextBox from "../formElements/textBox";

export default function CuttoffParams({ tmpParams, setTmpParams }) {
  const updateParams = (newVal, param) => {
    setTmpParams({
      ...tmpParams,
      [param]: newVal,
    });
  };
  return (
    <Form>
      <Form.Group>
        <TextBox
          displayName={"Max Radius"}
          val={tmpParams.maxRad}
          updateParam={(newVal) => updateParams(newVal, "maxRad")}
        />
      </Form.Group>

      <Form.Group>
        <TextBox
          displayName={"Min Radius"}
          val={tmpParams.minRad}
          updateParam={(newVal) => updateParams(newVal, "minRad")}
        />
      </Form.Group>

      <Form.Group>
        <TextBox
          displayName={"Epsilon"}
          val={tmpParams.epsilon}
          updateParam={(newVal) => updateParams(newVal, "epsilon")}
        />
      </Form.Group>

      <Form.Group>
        <TextBox
          displayName={"Max Iterations"}
          val={tmpParams.maxIters}
          updateParam={(newVal) => updateParams(newVal, "maxIters")}
          disabled={tmpParams.type === 2}
        />
      </Form.Group>
    </Form>
  );
}
