import { Button } from "react-bootstrap";
export default function ShowHideButton({ displayName, shouldShow, setShow }) {
  return (
    <>
      {shouldShow ? (
        <>
          <Button variant="primary" onClick={() => setShow((prev) => !prev)}>
            {"Hide " + displayName}
          </Button>
        </>
      ) : (
        <Button variant="primary" onClick={() => setShow((prev) => !prev)}>
          {"Show " + displayName}
        </Button>
      )}
    </>
  );
}
