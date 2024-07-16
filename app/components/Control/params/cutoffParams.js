import { Form } from "react-bootstrap";
import TextBoxControl from "../TextBoxControl";

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
        <TextBoxControl
          displayName={"Max Radius"}
          val={tmpParams.maxRad}
          updateParam={(newVal) => updateParams(newVal, "maxRad")}
        />
      </Form.Group>

      <Form.Group>
        <TextBoxControl
          displayName={"Min Radius"}
          val={tmpParams.minRad}
          updateParam={(newVal) => updateParams(newVal, "minRad")}
        />
      </Form.Group>

      <Form.Group>
        <TextBoxControl
          displayName={"Epsilon"}
          val={tmpParams.epsilon}
          updateParam={(newVal) => updateParams(newVal, "epsilon")}
        />
      </Form.Group>

      <Form.Group>
        <TextBoxControl
          displayName={"Max Iterations"}
          val={tmpParams.maxIters}
          updateParam={(newVal) => updateParams(newVal, "maxIters")}
          disabled={tmpParams.type === 2}
        />
      </Form.Group>
    </Form>
  );
}
