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

  moveTo(targetX: number, targetY: number): Shape {
    this.#centerX = targetX;
    this.#centerY = targetY;
    return this;
  }

  rotate(angle: number): Shape {
    // rotate circle
    return this;
  }

  scale(factor: number): Shape {
    // scale circle
    return this;
  }

  toString(): string {
    return `Circle at (${this.#centerX}, ${this.#centerY}) with radius ${this.#radius}`;
  }
}