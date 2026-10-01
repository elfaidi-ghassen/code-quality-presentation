export class Line {
  #startX;
  #startY;
  #endX;
  #endY;

  constructor(startX, startY, endX, endY) {
    this.#startX = startX;
    this.#startY = startY;
    this.#endX = endX;
    this.#endY = endY;
  }

  moveTo(targetX, targetY) {
    const dx = targetX - this.#startX;
    const dy = targetY - this.#startY;
    this.#startX = targetX;
    this.#startY = targetY;
    this.#endX += dx;
    this.#endY += dy;
    return this;
  }

  rotate(angle) {
    // rotate line
    return this;
  }

  scale(factor) {
    // scale line
    return this;
  }

  toString() {
    return `Line from (${this.#startX}, ${this.#startY}) to (${this.#endX}, ${this.#endY})`;
  }
}