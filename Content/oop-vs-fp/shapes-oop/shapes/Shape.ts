export interface Shape {
  moveTo(targetX: number, targetY: number): Shape;
  rotate(angle: number): Shape;
  scale(factor: number): Shape;
  toString(): string;
}
