import { Button } from "react-bootstrap";

export default function PansAndZooms({ tmpParams, handleZoom, handlePan }) {
  return (
    <>
      <Button
        disabled={tmpParams.type === 2}
        variant="primary"
        onClick={() => handleZoom(true)}
      >
        +
      </Button>
      <Button
        disabled={tmpParams.type === 2}
        variant="primary"
        onClick={() => handleZoom(false)}
      >
        -
      </Button>
      <Button
        disabled={tmpParams.type === 2}
        variant="primary"
        onClick={() => handlePan("left")}
      >
        left
      </Button>
      <Button
        disabled={tmpParams.type === 2}
        variant="primary"
        onClick={() => handlePan("right")}
      >
        right
      </Button>
      <Button
        disabled={tmpParams.type === 2}
        variant="primary"
        onClick={() => handlePan("up")}
      >
        up
      </Button>
      <Button
        disabled={tmpParams.type === 2}
        variant="primary"
        onClick={() => handlePan("down")}
      >
        down
      </Button>
    </>
  );
}
