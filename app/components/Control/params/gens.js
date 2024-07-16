import { Form, Button } from "react-bootstrap";
export default function Gens({ tmpParams, setTmpParams, setGenVals }) {
  return (
    <Form>
      {tmpParams.type === 0 || tmpParams.type === 1 || tmpParams.type === 2 ? (
        <>
          <Form.Control
            placeholder="Real Part"
            type="number"
            value={tmpParams.re == null ? "" : tmpParams.re}
            onChange={(e) =>
              setTmpParams({
                ...tmpParams,
                re: e.target.value,
              })
            }
          ></Form.Control>
          <Form.Control
            placeholder="Imaginary Part"
            type="number"
            value={tmpParams.im == null ? "" : tmpParams.im}
            onChange={(e) => {
              setTmpParams({
                ...tmpParams,
                im: e.target.value,
              });
            }}
          ></Form.Control>
        </>
      ) : (
        <>
          <Form.Control
            placeholder="Real Part"
            disabled
            readOnly
          ></Form.Control>
          <Form.Control
            placeholder="Imaginary Part"
            disabled
            readOnly
          ></Form.Control>
        </>
      )}
      {/* gen julia space button if in param (type 0) otherwise orbit, if not fractal gen julia
don't have anything about what type it is here, because that is handled in viewer */}
      {tmpParams.type === 0 ? (
        <>
          <Button
            variant="primary"
            onClick={() => setGenVals([tmpParams.re, tmpParams.im])}
          >
            Generate Dynamical Plane
          </Button>
        </>
      ) : tmpParams.type === 1 || tmpParams.type === 2 ? (
        <>
          <Button
            variant="primary"
            onClick={() => setGenVals([tmpParams.re, tmpParams.im])}
          >
            Generate Orbit
          </Button>
        </>
      ) : (
        <>
          <Button variant="primary" disabled>
            Generate Dynamical Plane
          </Button>
        </>
      )}
    </Form>
  );
}
