import { Form } from "react-bootstrap";
export default function TextBoxNoTitle({
  placeholder,
  val,
  updateParam,
  isDisabled,
}) {
  if (isDisabled) {
    return (
      <Form.Control placeholder={placeholder} disabled readOnly></Form.Control>
    );
  }
  return (
    <Form.Control
      placeholder={placeholder}
      type="number"
      value={val}
      onChange={(e) => updateParam(e.target.value)}
    ></Form.Control>
  );
}
