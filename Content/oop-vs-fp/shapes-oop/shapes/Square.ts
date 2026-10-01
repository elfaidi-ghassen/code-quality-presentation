import { Shape } from "./Shape";

export class Square implements Shape {
  #topLeftX: number;
  #topLeftY: number;
  #size: number;

  constructor(topLeftX: number, topLeftY: number, size: number) {
    this.#topLeftX = topLeftX;
    this.#topLeftY = topLeftY;
    this.#size = size;
  }

  moveTo(targetX: number, targetY: number): Shape {
    this.#topLeftX = targetX;
    this.#topLeftY = targetY;
    return this;
  }

  rotate(angle: number): Shape {
    // rotate square
    return this;
  }

  scale(factor: number): Shape {
    this.#size = this.#size * factor;
    return this;
  }

  toString(): string {
    return `Square at (${this.#topLeftX}, ${this.#topLeftY}) with size ${this.#size}`;
  }
}