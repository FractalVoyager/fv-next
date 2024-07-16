import { Form, Button } from "react-bootstrap";
import Btn from "../formElements/btn";

// TODO - can put inputRef just here I think
export default function ScriptArea({ inputRef, compileReady, setScript }) {
  return (
    <Form id="script-form">
      <Form.Group>
        <Form.Control
          as="textarea"
          ref={inputRef}
          type="text"
          placeholder="Enter Script"
          id="script-area"
        ></Form.Control>
      </Form.Group>

      <Btn
        displayName={"Compile & Run"}
        setParam={() => setScript(inputRef.current.value)}
        isDisabled={!compileReady}
      />
    </Form>
  );
}
