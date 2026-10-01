export const rotate = (
  shape,
  angle,
) => {
  switch (shape.kind) {
    case 'line': {
      // rotate line
      return shape
    }
    case 'square': {
      // rotate square
      return shape
    }
    case 'circle': {
      // rotate circle
      return shape
    }
    default:
      throw new Error(`rotate: unhandled shape`);
  }
};