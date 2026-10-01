export const scale = (shape, factor) => {
  switch (shape.kind) {
    case 'line': {
      // scale line
      return shape
    }
    case 'square':
      // scale shape  
      return shape
    case 'circle':
      // scale circle
      return shape
    default:
      throw new Error(`scale: unhandled shape`);
  }
};