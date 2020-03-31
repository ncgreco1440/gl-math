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

});
