import { Vector3D } from "./vec3";

function determinant(lhs: Vector3D, rhs: Vector3D): number[] {
  return [
    lhs.y * rhs.z - lhs.z * rhs.y,
    -1 * (lhs.x * rhs.z - lhs.z * rhs.x),
    lhs.x * rhs.y - lhs.y * rhs.x
  ];
}
