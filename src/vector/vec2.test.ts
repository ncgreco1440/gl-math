import { Vector2D } from './vec2';

describe('Vector2D', () => {

  test('it should have an x component', () => {
    const vec = new Vector2D(5, 6);

    expect(vec.x).toEqual(5);
  });

  test('it should have a y component', () => {
    const vec = new Vector2D(5, 6);

    expect(vec.y).toEqual(6);
  });

  test('it should have a magnitude (size)', () => {
    const vec = new Vector2D(5, 6);

    const magnitude = vec.magnitude;

    expect(magnitude).toEqual(Math.hypot(5, 6));
  });

  test('it should have a direction', () => {
    const vec = new Vector2D(5, 6);

    const direction = vec.direction;

    expect(direction).toBeCloseTo(0.876);
  });

  test('it should support addition with another Vector2D', () => {
    const vecA = new Vector2D(3, 4);
    const vecB = new Vector2D(7, 9);

    vecA.add(vecB);

    expect(vecA.x).toEqual(10);
    expect(vecA.y).toEqual(13);
  });

  test('it should support subtraction with another Vector2D', () => {
    const vecA = new Vector2D(3, 4);
    const vecB = new Vector2D(7, 9);

    vecA.subtract(vecB);

    expect(vecA.x).toEqual(-4);
    expect(vecA.y).toEqual(-5);
  });

  test('it should support multiplcation with a Scalar', () => {
    const vecA = new Vector2D(5, 8);
    const scalarA = 4;

    vecA.multiply(scalarA);

    expect(vecA.x).toEqual(20);
    expect(vecA.y).toEqual(32);
  });

  test('it should perform the dot product with another Vector2D', () => {
    const vec1 = new Vector2D(5, 6);
    const vec2 = new Vector2D(7, 8);

    expect(vec1.dot(vec2)).toEqual(83);
    expect(vec2.dot(vec1)).toEqual(83);
  });

  test('it understand if two vectors are not orthogonalTo each other', () => {
    const vec1 = new Vector2D(4, 9);
    const vec2 = new Vector2D(99, 34);

    expect(vec1.orthogonalTo(vec2)).toBe(false);
  });

  test('it understand if two vectors are orthogonalTo each other', () => {
    const vec1 = new Vector2D(4, 0);
    const vec2 = new Vector2D(0, 34);

    expect(vec1.orthogonalTo(vec2)).toBe(true);
  });

  test('it should understand how to acquire the angle between two vectors', () => {
    const vec1 = new Vector2D(0, 6);
    const vec2 = new Vector2D(8, 0);

    expect(vec1.angleBetween(vec2)).toBeCloseTo(1.57, 2);
  });

  test('it should find the cross product between two vectors', () => {
    const vec1 = new Vector2D(7, 6);
    const vec2 = new Vector2D(3, 15);

    const cross = vec1.cross(vec2);

    expect(cross.orthogonalTo(vec1)).toEqual(true);
  });

});
