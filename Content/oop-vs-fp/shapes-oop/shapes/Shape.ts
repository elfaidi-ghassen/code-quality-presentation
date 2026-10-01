export interface Shape {
  moveTo(targetX: number, targetY: number): void;
  rotate(angle: number): void;
  scale(factor: number): void;
  toString(): string;
}