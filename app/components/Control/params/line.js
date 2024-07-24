import { Form } from "react-bootstrap";
import Btn from "../formElements/btn";
export default function Line({
  origPoints,
  setNewPoints,
  setShouldCalculateJulias,
}) {
  return (
    <>
      <Form>
        The line is {origPoints.length} points long
        <Btn
          displayName="Generate Julia Sets"
          setParam={() => setShouldCalculateJulias(true)}
        />
      </Form>
    </>
  );
}
