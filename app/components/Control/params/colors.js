import { Form } from "react-bootstrap";
import ColorPicker from "../../Colors/SliderComponent";
export default function Colors({ setNumColors, numColors }) {
  return (
    <>
      <Form.Control
        onChange={(evt) => setNumColors(evt.target.value)}
        type="number"
        defaultValue={numColors}
        placeholder="Enter number of colors"
      ></Form.Control>
      <ColorPicker num={numColors} />
    </>
  );
}
