import { Form, Button } from "react-bootstrap";

export default function AxesAndHides({
  tmpParams,
  setTmpParams,
  setShowCords,
  setShowFrac,
}) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Real Axis Min Value</Form.Label>
        <Form.Control
          type="number"
          value={tmpParams.realMin}
          disabled={tmpParams.type === 2}
          onChange={(e) => {
            let num = e.target.value;
            setTmpParams({
              ...tmpParams,
              realMin: num !== "" ? Number(num) : "",
            });
          }}
        ></Form.Control>
        <Form.Label>Real Axis Max Value</Form.Label>
        <Form.Control
          type="number"
          value={tmpParams.realMax}
          disabled={tmpParams.type === 2}
          onChange={(e) => {
            let num = e.target.value;
            setTmpParams({
              ...tmpParams,
              realMax: num !== "" ? Number(num) : "",
            });
          }}
        ></Form.Control>
        <Form.Label>Imaginary Axis Min Value</Form.Label>
        <Form.Control
          type="number"
          value={tmpParams.imgMin}
          disabled={tmpParams.type === 2}
          onChange={(e) => {
            let num = e.target.value;
            setTmpParams({
              ...tmpParams,
              imgMin: num !== "" ? Number(num) : "",
            });
          }}
        ></Form.Control>
        <Form.Label>Imaginary Axis Max Value</Form.Label>
        <Form.Control
          type="number"
          value={tmpParams.imgMax}
          disabled={tmpParams.type === 2}
          onChange={(e) => {
            let num = e.target.value;
            setTmpParams({
              ...tmpParams,
              imgMax: num !== "" ? Number(num) : "",
            });
          }}
        ></Form.Control>
        <Form.Label>Imaginary Axis Resolution</Form.Label>
        <Form.Control
          type="number"
          disabled={tmpParams.type === 2}
          value={tmpParams.imagAxisRes}
          onChange={(e) => {
            let num = e.target.value;
            setTmpParams({
              ...tmpParams,
              imagAxisRes: num !== "" ? Number(num) : "",
            });
          }}
        ></Form.Control>
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
