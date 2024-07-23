import { Button } from "react-bootstrap";
import Btn from "../formElements/btn";
export default function MainBtns({
  backReady,
  setBack,
  updateOk,
  handleUpdate,
}) {
  const btns = [
    {
      name: "Back",
      setter: () => setBack((prev) => prev + 1),
      disabler: backReady,
    },
    {
      name: "Update",
      setter: handleUpdate,
      disabler: updateOk,
    },
  ];
  return (
    <>
      {btns.map((obj) =>
        obj.disabler ? (
          <Btn
            displayName={obj.name}
            setParam={obj.setter}
            isNotPrimary={obj.name === "Update"}
            key={obj.name}
          />
        ) : (
          <Btn
            displayName={obj.name}
            isDisabled={true}
            isNotPrimary={obj.name === "Update"}
            key={obj.name}
          />
        )
      )}
    </>
  );
}
