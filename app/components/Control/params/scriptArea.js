import { Form, Button } from "react-bootstrap";

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
      {compileReady ? (
        <Button
          variant="primary"
          onClick={() => {
            setScript(inputRef.current.value);
          }}
        >
          Compile & Run
        </Button>
      ) : (
        <Button
          variant="primary"
          disabled
          onClick={() => {
            setScript(inputRef.current.value);
          }}
        >
          Compile & Run
        </Button>
      )}
    </Form>
  );
}
