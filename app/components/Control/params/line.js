import { Form } from "react-bootstrap";
import Btn from "../formElements/btn";
import { useCalcJuliasStore } from "@/app/store/zustandTest";
import Link from "next/link";
export default function Line({
  origPoints,
  setNewPoints,
  setShouldCalculateJulias,
}) {
  // TODO:
  /*
  - options to probablize
  - options to increase or decrease number of points
  - apply button that closes the modal and redraws the line
  - button to take the currently drawn line and calculate Julia Sets from it
  - this btn will take you to the new page and set global state needed
  */
  // TODO - this should be written to cookies local storage instead of global state
  const setFinal = useCalcJuliasStore((state) => state.setFinalLinePoints);
  console.log(origPoints);
  const generate = () => {
    setFinal(origPoints);
  };
  return (
    <>
      <Form>
        The line is {origPoints.length} points long
        <Link href="/juliaSets">
          <Btn displayName="Generate Julia Sets ->" setParam={generate()} />
        </Link>
      </Form>
    </>
  );
}
