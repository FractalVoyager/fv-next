import { Form } from "react-bootstrap";
import TextBoxControl from "../textBoxControl";

export default function CuttoffParams({ tmpParams, setTmpParams }) {
  return (
    <Form>
      <TextBoxControl
        displayName={"Max Radius"}
        val={tmpParams.maxRad}
        updateParam={(newVal) =>
          setTmpParams({
            ...tmpParams,
            maxRad: newVal,
          })
        }
      />
      <TextBoxControl
        displayName={"Min Radius"}
        val={tmpParams.minRad}
        updateParam={(newVal) =>
          setTmpParams({
            ...tmpParams,
            minRad: newVal,
          })
        }
      />
      <TextBoxControl
        displayName={"Epsilon"}
        val={tmpParams.epsilon}
        updateParam={(newVal) =>
          setTmpParams({
            ...tmpParams,
            epsilon: newVal,
          })
        }
      />
      <TextBoxControl
        displayName={"Max Iterations"}
        val={tmpParams.maxIters}
        updateParam={(newVal) =>
          setTmpParams({
            ...tmpParams,
            maxIters: newVal,
          })
        }
        disabled={tmpParams.type === 2}
      />
    </Form>
  );
}
