import { Form } from "react-bootstrap";

export default function Radii({ tmpParams, setTmpParams }) {
  return (
    <>
      <Form.Group>
        <Form.Label>Max Radius</Form.Label>
        <Form.Control
          value={tmpParams.maxRad}
          onChange={(e) =>
            setTmpParams({
              ...tmpParams,
              maxRad: e.target.value,
            })
          }
          type="number"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Min Radius</Form.Label>
        <Form.Control
          value={tmpParams.minRad}
          onChange={(e) =>
            setTmpParams({
              ...tmpParams,
              minRad: e.target.value,
            })
          }
          type="number"
        ></Form.Control>
      </Form.Group>
    </>
  );
}
