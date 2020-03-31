export class Vector2D {
  public constructor(public x: number = 0, public y: number = 0) {}

  /**
   * The magnitude (size) of the Vector.
   */
  public get magnitude(): number {
    return Math.hypot(this.x, this.y);
  }

  /**
   * The direction of the vector in **radians**
   */
  public get direction(): number {
    return Math.atan(this.y / this.x); // * (180/Math.PI); to Degrees
  }

  /**
   * Adds a Vector, and returns the lhs vector to allow for chaining
   * @param rhs
   * @returns Vector2D
   */
  public add(rhs: Vector2D): Vector2D {
    this.x += rhs.x;
    this.y += rhs.y;
    return this;
  }

  /**
   * Subtracts from the vector, and returns the lhs vector to allow for chaining
   * @param rhs
   */
  public subtract(rhs: Vector2D): Vector2D {
    this.x += (-1 * rhs.x);
    this.y += (-1 * rhs.y);
    return this;
  }

  /**
   * Multiplies the vector by a given scalar, and returns the lhs vector to allow for chaining
   * @param scalar
   */
  public multiply(scalar: number): Vector2D {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
}
