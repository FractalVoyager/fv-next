"use client";

import "./control.css";
import { useRef, useState, useEffect } from "react";
import Viewer from "../Viewer/viewerComponent";
import { useCompileCode } from "../../hooks/emceptionHooks";
import CuttoffParams from "./params/cutoffParams";
import ScriptArea from "./params/scriptArea";
import PansAndZooms from "./params/pansAndZooms";
import Orbits from "./params/orbits";
import Gens from "./params/gens";
import MainBtns from "./params/mainBtns";
import AxesAndHides from "./params/axesAndHides";
import Colors from "./params/colors";
import {
  useBackState,
  useCompileStore,
  useColorsStore,
  useTmpParamsStore,
  useCanStyleStore,
} from "../../store/zustandTest.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCgen } from "../../hooks/cgenHook";
import Header from "../Header/headerComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

import Col from "react-bootstrap/Col";

import { axesToParams } from "../../util/util";

/*
Props: none 
Returns: header, all buttons and controls for fractal, viewer component (contains canvases and cords box)
Description: This components has all of the options for the fractal, and passes them as props to the viewer
component. It uses tmpParamsStore which stores the values for these options that are currently being used
by the viewer (gets written to by this component and also viewer for back button and box zooms). This component
holds/controls the state of the options currently, and compares them with the stored options, and if different 
it allows an update button click, which changes the props, rerendering viewer. The script stuff and generating
julia set or obit button is also here, but handled differently than above flow
*/

export default function Control({}) {
  // * refs * //
  const wrapperRef = useRef(null);
  const childrenRefs = useRef([]);
  const [styleType, setStyleType] = useState(0);

  // modal states
  const [colorModalOpen, setColorModalOpen] = useState(false);
  const [programModalOpen, setProgramModalOpen] = useState(false);
  const [optsModalOpen, setOptsModalOpen] = useState(false);

  useEffect(() => {
    if (wrapperRef.current && childrenRefs.current) {
      let width = wrapperRef.current.clientWidth;
      let height = wrapperRef.current.clientHeight;

      const occupiedHeight = childrenRefs.current.reduce(
        (acc, item) => acc + item.clientHeight,
        0
      );

      let difference = height - occupiedHeight;
      // TODO refactor to clean code and readable
      if (difference <= 3 && styleType === 0) {
        if (styleType === 0) {
          setStyleType(1);
        }
      } else if (difference > 100 && styleType === 1) {
        setStyleType(0);
      } else if (difference <= 2 && styleType === 1) {
        setStyleType(2);
      } else if (difference > 139 && styleType === 2) {
        setStyleType(1);
      } else if ((difference <= 2 && styleType === 2) || width < 300) {
        setStyleType(3);
      } else if (difference > 500 && styleType === 3 && width >= 300) {
        setStyleType(1);
      } else if (difference > 150 && styleType === 4) {
        setStyleType(3);
      } else if (difference <= 2 && styleType === 3) {
        setStyleType(4);
      }
    }
  });

  // script ref
  const inputRef = useRef(null);
  // the cgened code from useCgen that gets passed to emception
  const codeRef = useRef(null);

  // * global state * //

  // if back click is allowed
  const backReady = useBackState((state) => state.allowed);
  const compileReady = useCompileStore((state) => state.ready);
  // color stuff from color component - way to pass state up
  const { finalNumColors, colors } = useColorsStore((state) => ({
    finalNumColors: state.amt,
    colors: state.colors,
  }));
  // gets all of tmpParamsStore - the current values of options being used in viewer
  const tmpParamsStore = useTmpParamsStore();
  // methods on ^^
  const setAlltmpParamsStore = useTmpParamsStore((state) => state.setAll);

  const canWidthStore = useCanStyleStore((state) => state.width);
  // need to add this one simply for reclacuating the total screen width... could do it a different way with local state for screen width but this works too
  // becuae this gets updated every time the screen is resized
  const trigger = useCanStyleStore((state) => state.reCalc);

  // * local state * //

  // back clicks
  const [back, setBack] = useState(0);
  // cpx number
  const [showCords, setShowCords] = useState(true);
  // if we should clear fractal on orbit drag
  const [showFrac, setShowFrac] = useState(true);
  // silly fix to force SOMETHING
  const [foo, setFoo] = useState(0);
  // current values of options - what is in textboxes - gets set to default vals for tmpParamsStore initially
  const [tmpParams, setTmpParams] = useState(tmpParamsStore);
  // the props that get passed down to viewer - starts as default values as per paramsStore
  const [params, setParams] = useState({
    x: 2160,
    y: 2160,
    scaleX: 2,
    scaleY: 2,
    startX: -1080,
    startY: -1080,
    maxRad: 4,
    minRad: 0.1,
    epsilon: 0.000001,
    maxIters: 64,
    numColors: tmpParamsStore.numColors,
    colors: tmpParamsStore.colors,
    orbitNum: 64,
    orbitColor: "red",
  });

  // the values for the generate on click
  const [genVals, setGenVals] = useState([null, null]);
  // current script running/ to be run, updates to inputRef when compile and run is clicked
  const [script, setScript] = useState(null);
  // numColors that get passed as prop to color components - could proably merge with numColors in tmpParams
  const [numColors, setNumColors] = useState(50);
  // state if an update is ok
  const [updateOk, setUpdateOk] = useState(false);

  // * useEffects * //

  // update current values in this component when colors change
  useEffect(() => {
    setTmpParams({ ...tmpParams, colors: colors, numColors: finalNumColors });
  }, [colors, finalNumColors]);

  // when the store (options used in fractal) get updated, update the current values to them
  // happens on box zoom or back
  useEffect(() => {
    setTmpParams(tmpParamsStore);
  }, [tmpParamsStore]);

  // on change of options in this component, check with options currently for viewer
  // if different: allow update, if the same, don't allow update
  useEffect(() => {
    if (
      tmpParamsStore.realMax != tmpParams.realMax ||
      tmpParamsStore.realMin != tmpParams.realMin ||
      tmpParamsStore.imgMax != tmpParams.imgMax ||
      tmpParamsStore.imgMin != tmpParams.imgMin ||
      tmpParamsStore.imagAxisRes != tmpParams.imagAxisRes ||
      tmpParamsStore.epsilon != tmpParams.epsilon ||
      tmpParamsStore.maxIters != tmpParams.maxIters ||
      tmpParamsStore.minRad != tmpParams.minRad ||
      tmpParamsStore.maxRad != tmpParams.maxRad ||
      JSON.stringify(tmpParamsStore.colors) !==
        JSON.stringify(tmpParams.colors) ||
      tmpParamsStore.numColors != tmpParams.numColors ||
      tmpParamsStore.type != tmpParams.type ||
      tmpParamsStore.orbitNum != tmpParams.orbitNum ||
      tmpParamsStore.orbitColor != tmpParams.orbitColor
    ) {
      setUpdateOk(true);
    } else {
      setUpdateOk(false);
    }
  }, [tmpParams]);

  // * click handlers * //

  // handles an update, uses the values of tmpParamStore to calculate the params to be passed
  // as props to viewer, then sets those params, and also sets the tmpParamStore
  function handleUpdate() {
    // math to calculate height, width, starts, and scales of canvas from complex number range
    let height = tmpParams.imgMax - tmpParams.imgMin;
    let width = tmpParams.realMax - tmpParams.realMin;

    let yRes = tmpParams.imagAxisRes;
    let xRes = (width / height) * yRes;

    let { scaleX, scaleY, startX, startY } = axesToParams(
      tmpParams.imgMax,
      tmpParams.imgMin,
      tmpParams.realMax,
      tmpParams.realMin,
      xRes,
      yRes
    );

    // props for viewer
    setParams({
      ...params,
      x: parseInt(Math.round(xRes)),
      y: parseInt(Math.round(yRes)),
      scaleX: parseFloat(scaleX),
      scaleY: parseFloat(scaleY),
      startX: parseFloat(startX),
      startY: parseFloat(startY),
      maxRad: parseFloat(tmpParams.maxRad),
      minRad: parseFloat(tmpParams.minRad),
      epsilon: parseFloat(tmpParams.epsilon),
      maxIters: parseInt(tmpParams.maxIters),
      colors: tmpParams.colors,
      numColors: tmpParams.numColors,
      orbitColor: tmpParams.orbitColor,
      orbitNum: tmpParams.orbitNum,
      foo: foo + 1,
    });

    // tmpParamsStore update (match what to check agianst to what is here now because updated viewer here)
    setAlltmpParamsStore(
      tmpParams.realMax,
      tmpParams.realMin,
      tmpParams.imgMax,
      tmpParams.imgMin,
      tmpParams.maxRad,
      tmpParams.minRad,
      tmpParams.epsilon,
      tmpParams.maxIters,
      tmpParams.imagAxisRes,
      tmpParams.colors,
      tmpParams.numColors,
      tmpParams.re,
      tmpParams.im,
      tmpParams.type,
      tmpParams.orbitNum,
      tmpParams.orbitColor
    );
    setFoo((prev) => prev + 1);
  }
  // calling hook to set current value of codeRef
  // * refs don't cause rerenders when they change or update value
  codeRef.current = useCgen(script);
  // compile - in hook, only runs if code changes - triggers change in state
  // that useGenPixles is binded to, so this also generates new pixles with useGenPixles
  useCompileCode(codeRef.current);

  // below is the jsx to be returned. It is the header, all of the options, the color components,
  // and the viewer component inlined styled with bootstrap
  // in all the forms, the value is hard set to the current options here (tmpParams) and they have
  // on change handlers which set those tmpParams
  return (
    <>
      <div id="control-viewer">
        <div
          id="controls"
          ref={wrapperRef}
          // -5 makes it works with global padding
          // here is hard setting width of control container based on the calculated width
          // just doing it for the viewer container doesn't quite work fully, this addition makes it

          style={{
            width: canWidthStore
              ? document.documentElement.clientWidth - canWidthStore - 5 + "px"
              : "",
          }}
        >
          {wrapperRef.current ? (
            <>
              <Header ref={(el) => (childrenRefs.current[0] = el)} />

              <Container fluid ref={(el) => (childrenRefs.current[1] = el)}>
                <Row>
                  <div className={styleType < 3 ? "col" : ""}>
                    {styleType < 2 ? (
                      <CuttoffParams
                        tmpParams={tmpParams}
                        setTmpParams={setTmpParams}
                      />
                    ) : (
                      <>
                        <ScriptArea
                          inputRef={inputRef}
                          compileReady={compileReady}
                          setScript={setScript}
                        />
                      </>
                    )}
                    {styleType < 3 ? (
                      <>
                        <Form>
                          <PansAndZooms
                            tmpParams={tmpParams}
                            params={params}
                            setParams={setParams}
                          />
                          <Form />
                          <Orbits
                            tmpParams={tmpParams}
                            setTmpParams={setTmpParams}
                          />
                          {/* if there is a fractal on the screen, don't grey out boxes */}
                          <Gens
                            tmpParams={tmpParams}
                            setTmpParams={setTmpParams}
                            setGenVals={setGenVals}
                          />
                        </Form>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={styleType < 3 ? "col" : ""}>
                    {styleType < 2 ? (
                      <ScriptArea
                        inputRef={inputRef}
                        compileReady={compileReady}
                        setScript={setScript}
                      />
                    ) : (
                      ""
                    )}

                    <Form id="viewer-form">
                      <MainBtns
                        backReady={backReady}
                        setBack={setBack}
                        updateOk={updateOk}
                        handleUpdate={handleUpdate}
                      />

                      {styleType === 3 || styleType === 4 ? (
                        <>
                          <Button
                            variant="primary"
                            onClick={() => setOptsModalOpen(true)}
                          >
                            Other Options
                          </Button>
                          <Modal
                            show={optsModalOpen}
                            onHide={() => setOptsModalOpen(false)}
                            size="xl"
                          >
                            <Modal.Header closeButton>Options</Modal.Header>
                            <Modal.Body>
                              <Container>
                                <Row>
                                  <Col>
                                    <CuttoffParams
                                      tmpParams={tmpParams}
                                      setTmpParams={setTmpParams}
                                    />
                                    <Form>
                                      <PansAndZooms
                                        tmpParams={tmpParams}
                                        params={params}
                                        setParams={setParams}
                                      />
                                      <Form />
                                      <Orbits
                                        tmpParams={tmpParams}
                                        setTmpParams={setTmpParams}
                                      />
                                    </Form>
                                  </Col>
                                  <Col>
                                    <Form>
                                      {/* if there is a fractal on the screen, don't grey out boxes */}
                                      <Gens
                                        tmpParams={tmpParams}
                                        setTmpParams={setTmpParams}
                                        setGenVals={setGenVals}
                                      />
                                    </Form>
                                    <AxesAndHides
                                      tmpParams={tmpParams}
                                      setTmpParams={setTmpParams}
                                      setShowCords={setShowCords}
                                      setShowFrac={setShowFrac}
                                      showCords={showCords}
                                      showFrac={showFrac}
                                    />
                                  </Col>
                                </Row>
                                {styleType === 4 ? (
                                  <>
                                    <Row>
                                      <Colors
                                        setNumColors={setNumColors}
                                        numColors={numColors}
                                      />
                                    </Row>
                                  </>
                                ) : (
                                  ""
                                )}
                              </Container>
                            </Modal.Body>
                          </Modal>
                        </>
                      ) : (
                        ""
                      )}
                    </Form>
                    {styleType < 3 ? (
                      <AxesAndHides
                        tmpParams={tmpParams}
                        setTmpParams={setTmpParams}
                        setShowCords={setShowCords}
                        setShowFrac={setShowFrac}
                        showCords={showCords}
                        showFrac={showFrac}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </Row>

                <Row>
                  {styleType > 1 && styleType < 3 ? (
                    <Col>
                      <Button
                        variant="primary"
                        style={{ width: "100%" }}
                        onClick={() => setProgramModalOpen(true)}
                      >
                        Edit Program Paramaters
                      </Button>
                      <Modal
                        show={programModalOpen}
                        onHide={() => setProgramModalOpen(false)}
                      >
                        <Modal.Header closeButton>
                          Edit program paramters, close, then presss update
                        </Modal.Header>
                        <Modal.Body>
                          <CuttoffParams
                            tmpParams={tmpParams}
                            setTmpParams={setTmpParams}
                          />
                        </Modal.Body>
                      </Modal>
                    </Col>
                  ) : (
                    ""
                  )}
                  {/* will certianly need to be smaller if height is under 807 */}
                  {(styleType === 1) | (styleType === 2) ? (
                    <>
                      <Col>
                        <Button
                          variant="primary"
                          style={{ width: "100%" }}
                          onClick={() => setColorModalOpen(true)}
                        >
                          Open Color Select
                        </Button>
                        <Modal
                          show={colorModalOpen}
                          onHide={() => setColorModalOpen(false)}
                        >
                          <Modal.Header closeButton>
                            Select a color, close, then press update
                          </Modal.Header>
                          <Modal.Body>
                            <Colors
                              setNumColors={setNumColors}
                              numColors={numColors}
                            />
                          </Modal.Body>
                        </Modal>
                      </Col>
                    </>
                  ) : styleType === 4 ? (
                    ""
                  ) : (
                    <>
                      <Colors
                        setNumColors={setNumColors}
                        numColors={numColors}
                      />
                    </>
                  )}
                </Row>
              </Container>
            </>
          ) : (
            ""
          )}
        </div>

        <Viewer
          // this actually does nothing, for the params to really be the key do below, but that kinda messes it up, we really don't want duplicate componets
          // it makes it so the screen goes white, and you can't go back if you change one of the controls
          //key={params}
          //key={Object.entries(params)}
          xRes={params.x}
          yRes={params.y}
          initXscale={params.scaleX}
          initYscale={params.scaleY}
          initStartX={params.startX}
          initStartY={params.startY}
          colors={params.colors}
          numColors={params.numColors}
          maxRad={params.maxRad}
          minRad={params.minRad}
          epsilon={params.epsilon}
          maxIters={params.maxIters}
          back={back}
          showCords={showCords}
          foo={params.foo}
          orbitNum={params.orbitNum}
          orbitColor={params.orbitColor}
          genVals={genVals}
          showFrac={showFrac}
        />
      </div>
    </>
  );
}
