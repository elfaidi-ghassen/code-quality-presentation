import { Shape } from "./Shape";

export class Circle implements Shape {
  #centerX: number;
  #centerY: number;
  #radius: number;

  constructor(centerX: number, centerY: number, radius: number) {
    this.#centerX = centerX;
    this.#centerY = centerY;
    this.#radius = radius;
  }

  moveTo(targetX: number, targetY: number) {
    this.#centerX = targetX;
    this.#centerY = targetY;
  }

  rotate(angle: number) {
    // rotate circle
  }

  scale(factor: number) {
    // scale circle
  }

  toString(): string {
    return `Circle at (${this.#centerX}, ${this.#centerY}) with radius ${this.#radius}`;
  }
}