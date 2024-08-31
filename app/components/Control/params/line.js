"use client";
import { Form } from "react-bootstrap";
import Btn from "../formElements/btn";
import { useState } from "react";
import { useCalcJuliasStore } from "@/app/store/zustandTest";
import { multiply, transpose, lusolve, e } from "mathjs";

function fitPolynomial(points, degree) {
  const x = points.map((point) => point[0]);
  const y = points.map((point) => point[1]);
  const X = [];
  const Y = [];

  for (let i = 0; i < x.length; i++) {
    const row = [];
    for (let j = 0; j <= degree; j++) {
      row.push(x[i] ** j);
    }
    X.push(row);
    Y.push([y[i]]);
  }

  // Calculate transpose of X
  const XT = transpose(X);
  // Multiply X transpose with X
  const XTX = multiply(XT, X);
  // Multiply X transpose with Y
  const XTY = multiply(XT, Y);
  // Calculate the coefficients using matrix inverse
  const coefficients = lusolve(XTX, XTY);
  return coefficients.flat();
}

// Helper function to evaluate polynomial
function evaluatePolynomial(x, coefficients) {
  return coefficients.reduce(
    (sum, coeff, index) => sum + coeff * x ** index,
    0
  );
}

// Ramer-Douglas-Peucker Algorithm to simplify a curve
function rdp(points, epsilon) {
  if (points.length <= 2) return points;

  const dmax = points.reduce((max, point, i) => {
    if (i === 0 || i === points.length - 1) return max;
    const d = perpendicularDistance(
      point,
      points[0],
      points[points.length - 1]
    );
    return d > max ? d : max;
  }, 0);

  if (dmax > epsilon) {
    const index = points.findIndex(
      (point) =>
        perpendicularDistance(point, points[0], points[points.length - 1]) ===
        dmax
    );
    const leftPoints = rdp(points.slice(0, index + 1), epsilon);
    const rightPoints = rdp(points.slice(index), epsilon);
    return leftPoints.slice(0, -1).concat(rightPoints);
  } else {
    return [points[0], points[points.length - 1]];
  }
}

// Helper function to calculate perpendicular distance
function perpendicularDistance(point, lineStart, lineEnd) {
  const [x0, y0] = point;
  const [x1, y1] = lineStart;
  const [x2, y2] = lineEnd;

  const numerator = Math.abs(
    (y2 - y1) * x0 - (x2 - x1) * y0 + x2 * y1 - y2 * x1
  );
  const denominator = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2);
  return numerator / denominator;
}

function generateSimplifiedPoints(originalPoints, coefficients, epsilon) {
  // Generate points along the polynomial curve
  const curvePoints = originalPoints.map(([x]) => [
    x,
    evaluatePolynomial(x, coefficients),
  ]);

  // Simplify the curve points using RDP algorithm
  return rdp(curvePoints, epsilon);
}

function distance(p1, p2) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
function roundPoint(point) {
  return [Math.round(point[0]), Math.round(point[1])];
}
function generatePixelConnectedPoints(originalPoints, coefficients) {
  const connectedPoints = [];

  for (let i = 0; i < originalPoints.length - 1; i++) {
    const [xStart] = originalPoints[i];
    const [xEnd] = originalPoints[i + 1];
    const yStart = evaluatePolynomial(xStart, coefficients);
    const yEnd = evaluatePolynomial(xEnd, coefficients);

    // Start with the rounded first point
    let currentPoint = roundPoint([xStart, yStart]);
    connectedPoints.push(currentPoint);

    // Calculate the direction vector from start to end
    const dx = xEnd - xStart;
    const dy = yEnd - yStart;
    const steps = Math.max(Math.abs(dx), Math.abs(dy)); // Number of steps needed for pixel connectivity

    // Incremental step values
    const xStep = dx / steps;
    const yStep = dy / steps;

    // Generate points along the line segment from xStart to xEnd
    for (let step = 1; step <= steps; step++) {
      const newX = xStart + step * xStep;
      const newY = evaluatePolynomial(newX, coefficients);

      const newPoint = roundPoint([newX, newY]);
      if (distance(currentPoint, newPoint) >= 1) {
        // Add new point only if it's 1 pixel away from the previous point
        connectedPoints.push(newPoint);
        currentPoint = newPoint;
      }
    }
  }

  return connectedPoints;
}
function generateLinePoints(start, end) {
  const points = [];

  const [xStart, yStart] = start;
  const [xEnd, yEnd] = end;

  // Calculate the number of steps required to ensure pixel connectivity
  const dx = xEnd - xStart;
  const dy = yEnd - yStart;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));

  // Incremental step values
  const xStep = dx / steps;
  const yStep = dy / steps;

  // Generate points along the line segment
  for (let step = 0; step <= steps; step++) {
    const x = xStart + step * xStep;
    const y = yStart + step * yStep;
    points.push(roundPoint([x, y]));
  }

  return points;
}

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
  const [currDegree, setCurrDegree] = useState(null);
  const generate = () => {
    setFinal(origPoints);
  };

  const makePolynomial = (origPoints, currDegree) => {
    console.log(origPoints);
    let newPoints;
    if (currDegree === 1) {
      newPoints = generateLinePoints(
        origPoints[0],
        origPoints[origPoints.length - 1]
      );
      newPoints = Array.from(
        new Set(newPoints.map((point) => JSON.stringify(point)))
      ).map((point) => JSON.parse(point));
    } else {
      const coefficients = fitPolynomial(origPoints, currDegree);
      const epsilon = 1; // Tolerance for simplification
      newPoints = generatePixelConnectedPoints(origPoints, coefficients);
      newPoints = Array.from(
        new Set(newPoints.map((point) => JSON.stringify(point)))
      ).map((point) => JSON.parse(point));
    }

    console.log(newPoints);
    // setNewPoints(points);
  };
  return (
    <>
      <Form>
        The line is {origPoints.length} points long
        <Form.Group>
          <Form.Label>Make Polynomial?</Form.Label>
          <Form.Control
            type="number"
            id="polynomial-input"
            value={currDegree}
            onChange={(e) => setCurrDegree(Number(e.target.value))}
            min="1"
            placeholder="Enter degree"
          />
        </Form.Group>
        <Btn
          displayName="Set Degree and make new line"
          setParam={() => makePolynomial(origPoints, currDegree)}
        />
        <Link href="/juliaSets">
          <Btn displayName="Generate Julia Sets ->" setParam={generate()} />
        </Link>
      </Form>
    </>
  );
}
