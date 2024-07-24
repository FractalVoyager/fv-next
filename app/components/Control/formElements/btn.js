import { Button } from "react-bootstrap";
export default function Btn({
  displayName,
  setParam,
  isDisabled,
  isNotPrimary,
}) {
  if (isDisabled) {
    return (
      <Button variant={isNotPrimary ? "warning" : "primary"} disabled>
        {displayName}
      </Button>
    );
  }
  return (
    <Button variant={isNotPrimary ? "warning" : "primary"} onClick={setParam}>
      {displayName}
    </Button>
  );
}
