import { Form } from "react-bootstrap";
export default function TextBoxControl({
  displayName,
  val,
  updateParam,
  disabled,
}) {
  return (
    <>
      <Form.Label>{displayName}</Form.Label>
      <Form.Control
        value={val}
        onChange={(e) => updateParam(e.target.value)}
        type="number"
        disabled={disabled}
      ></Form.Control>
    </>
  );
}
