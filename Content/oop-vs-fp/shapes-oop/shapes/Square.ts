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

  moveTo(targetX: number, targetY: number): void {
    this.#topLeftX = targetX;
    this.#topLeftY = targetY;
  }

  rotate(angle: number): void {
    // rotate square
  }

  scale(factor: number): void {
    this.#size = this.#size * factor;
  }

  toString(): string {
    return `Square at (${this.#topLeftX}, ${this.#topLeftY}) with size ${this.#size}`;
  }
}