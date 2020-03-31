import { Vector3D } from "./vec3";

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

  /**
   * Acquire the scalar as a result of the dot product of 2 vectors
   * @param rhs
   */
  public dot(rhs: Vector2D): number {
    return (this.x * rhs.x) + (this.y * rhs.y);
  }

  /**
   * Checks if the vector is orthogonal to the specified vector
   * @param rhs
   */
  public orthogonalTo(rhs: Vector2D): boolean {
    return this.dot(rhs) == 0;
  }

  /**
   * Angle in **radians** between the two given vectors
   * @param rhs
   */
  public angleBetween(rhs: Vector2D): number {
    const d = this.dot(rhs);
    if (d == 0) return (Math.PI / 2);
    const cos = d / (this.magnitude * rhs.magnitude);
    return Math.acos(Math.min(Math.max(cos, -1), 1));
  }

  public cross(rhs: Vector2D): Vector3D {
    const determinantX = (this.y * 0 - 0 * rhs.y);
    const determinantY = -1 * (this.x * 0 - 0 * rhs.x);
    const determinantZ = (this.x * rhs.y - this.y * rhs.x);

    return new Vector3D(determinantX, determinantY, determinantZ);

    return new Vector3D(0, 0, this.x * rhs.y - this.y * rhs.x);
  }

  public toString(): string {
    return `<${this.x}, ${this.y}>`;
  }
}
