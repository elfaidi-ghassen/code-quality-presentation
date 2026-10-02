import { moveTo } from "./operations/moveTo.js";
import { toString } from "./operations/toString.js";

export const line = (startX, startY, endX, endY) =>
  ({ type: 'line', startX, startY, endX, endY });

export const square = (topLeftX, topLeftY, size) =>
  ({ type: 'square', topLeftX, topLeftY, size });

export const circle = (centerX, centerY, radius) =>
  ({ type: 'circle', centerX, centerY, radius });
















let c = circle(0, 0, 10)
let newC = moveTo(c, 10, 10)
console.log(toString(newC))

