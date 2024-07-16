import { Form } from "react-bootstrap";
export default function Orbits({ tmpParams, setTmpParams }) {
  return (
    <>
      <Form.Label>Orbit Iterations</Form.Label>
      <Form.Control
        placeholder="orbit number"
        type="number"
        value={tmpParams.orbitNum}
        onChange={(e) =>
          setTmpParams({
            ...tmpParams,
            orbitNum: e.target.value,
          })
        }
      ></Form.Control>
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
