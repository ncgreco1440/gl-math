import { Vector2D } from "./vec2";

export class Vector3D {
  public constructor(public x: number = 0, public y: number = 0, public z: number = 0) {}

  public get magnitude(): number {
    return Math.hypot(this.x, this.y, this.z);
  }

  public get direction(): number {
    return null;
  }

  public dot(rhs: Vector3D): number {
    return (this.x * rhs.x) + (this.y * rhs.y) + (this.z * rhs.z);
  }

  public cross(rhs: Vector3D): Vector3D {
    const determinantX = (this.y * rhs.z - this.z * rhs.y);
    const determinantY = -1 * (this.x * rhs.z - this.z * rhs.x);
    const determinantZ = (this.x * rhs.y - this.y * rhs.x);

    return new Vector3D(determinantX, determinantY, determinantZ);
  }

  public orthogonalTo(rhs: Vector2D | Vector3D): boolean {
    if (rhs instanceof Vector2D) {
      return this.dot(new Vector3D(rhs.x, rhs.y, 0)) == 0;
    }

    return this.dot(rhs) == 0;
  }

  public angleBetween(rhs: Vector3D): number {
    const d = this.dot(rhs);
    if (d == 0) return (Math.PI / 2);
    const cos = d / (this.magnitude * rhs.magnitude);
    return Math.acos(Math.min(Math.max(cos, -1), 1));
  }

  public toString(): string {
    return `<${this.x}, ${this.y}, ${this.z}>`;
  }
}
