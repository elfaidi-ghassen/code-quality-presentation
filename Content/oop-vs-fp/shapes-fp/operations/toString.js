
export const toString = (shape) => {
  switch (shape.type) {
    case 'line':
      return `Line from (${shape.startX}, ${shape.startY}) to (${shape.endX}, ${shape.endY})`;
    case 'square':
      return `Square at (${shape.topLeftX}, ${shape.topLeftY}) with size ${shape.size}`;
    case 'circle':
      return `Circle at (${shape.centerX}, ${shape.centerY}) with radius ${shape.radius}`;
    default:
      throw new Error(`toString: unhandled shape`);
  }
};