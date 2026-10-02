import { circle, line, square } from "../main.js";

export const moveTo = (shape, targetX, targetY) => {
  switch (shape.type) {
    case 'line': {
      const dx = targetX - shape.startX;
      const dy = targetY - shape.startY;
      return line(targetX, targetY, shape.endX + dx, shape.endY + dy)
    }
    case 'square':
      return square(targetX, targetY, shape.size)
    case 'circle':
      return circle(targetX, targetY, shape.radius)
    default:
      throw new Error(`move: unhandled shape`);
  }
};
