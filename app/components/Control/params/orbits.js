import { Form } from "react-bootstrap";
import TextBox from "../formElements/textBox";
export default function Orbits({ tmpParams, setTmpParams }) {
  return (
    <>
      <TextBox
        displayName={"Orbit Iterations"}
        val={tmpParams.orbitNum}
        updateParam={(newVal) =>
          setTmpParams({
            ...tmpParams,
            orbitNum: newVal,
          })
        }
      />

      <Form.Label>Orbit Color</Form.Label>
      <Form.Select
        aria-label="Default select example"
        value={tmpParams.orbitColor}
        onChange={(e) =>
          setTmpParams({
            ...tmpParams,
            orbitColor: e.target.value,
          })
        }
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </Form.Select>
    </>
  );
}
