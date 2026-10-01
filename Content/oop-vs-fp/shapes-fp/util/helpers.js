export const add = (a, b) =>
  ({ x: a.x + b.x, y: a.y + b.y });

export const sub = (a, b) =>
  ({ x: a.x - b.x, y: a.y - b.y });

export const mul = (a, k) =>
  ({ x: a.x * k, y: a.y * k });

