import { Form } from "react-bootstrap";
import TextBoxNoTitle from "../formElements/textBoxNoTitle";
import Btn from "../formElements/btn";

const textBoxNames = [
  { name: "Real Part", param: "re" },
  { name: "Imaginary Part", param: "im" },
];
export default function Gens({ tmpParams, setTmpParams, setGenVals }) {
  const updateParams = (newVal, param) => {
    setTmpParams({
      ...tmpParams,
      [param]: newVal,
    });
  };
  return (
    <Form>
      {tmpParams.type === 0 || tmpParams.type === 1 || tmpParams.type === 2 ? (
        <>
          {textBoxNames.map((obj) => (
            <TextBoxNoTitle
              placeholder={obj.name}
              val={tmpParams[obj.param] == null ? "" : tmpParams[obj.param]}
              updateParam={(newVal) => updateParams(newVal, obj.param)}
              key={obj.name}
            />
          ))}
        </>
      ) : (
        <>
          {textBoxNames.map((obj) => (
            <TextBoxNoTitle
              placeholder={obj.name}
              isDisabled={true}
              key={obj.name}
            />
          ))}
        </>
      )}
      {/* gen julia space button if in param (type 0) otherwise orbit, if not fractal gen julia
don't have anything about what type it is here, because that is handled in viewer */}
      {tmpParams.type === 0 ? (
        <Btn
          displayName={"Generate Dynamical Plane"}
          setParam={() => setGenVals([tmpParams.re, tmpParams.im])}
        />
      ) : tmpParams.type === 1 || tmpParams.type === 2 ? (
        <Btn
          displayName={"Generate Orbit"}
          setParam={() => setGenVals([tmpParams.re, tmpParams.im])}
        />
      ) : (
        <Btn displayName={"Generate Dynamical Plane"} isDisabled={true} />
      )}
    </Form>
  );
}
