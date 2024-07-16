import { Button } from "react-bootstrap";
export default function MainBtns({
  backReady,
  setBack,
  updateOk,
  handleUpdate,
}) {
  return (
    <>
      {backReady ? (
        <Button variant="primary" onClick={() => setBack((prev) => prev + 1)}>
          Back
        </Button>
      ) : (
        <Button
          variant="primary"
          disabled
          onClick={() => setBack((prev) => prev + 1)}
        >
          Back
        </Button>
      )}
      {/* <Button variant="primary">Forward</Button> */}
      {/* <Button variant="primary" onClick={resetTmpGlobal}>
                    Reset
                  </Button> */}
      {updateOk ? (
        <Button variant="warning" onClick={handleUpdate}>
          Update
        </Button>
      ) : (
        <Button variant="warning" disabled>
          Update
        </Button>
      )}
    </>
  );
}
