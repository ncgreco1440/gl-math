import { Vector3D } from './vec3';

describe('Vector3D', () => {

  test('should exist', () => {
    const vec3 = new Vector3D();

    expect(vec3).not.toBeFalsy();
  });

  test('it should return the dot product of <4, -2, 5>, <-1, 3, -6>, and <7, -5, 1>', () => {
    const vec1 = new Vector3D(4, -2, 5);
    const vec2 = new Vector3D(-1, 3, -6);
    const vec3 = new Vector3D(7, -5, 1);

    expect(vec1.dot(vec2)).toEqual(-40);
    expect(vec2.dot(vec3)).toEqual(-28);
  });

  test('it should test cross product of <1, 3, 4> and <2, 7, -5>', () => {
    const vec1 = new Vector3D(1, 3, 4);
    const vec2 = new Vector3D(2, 7, -5);

    const cross = vec1.cross(vec2);

    expect(cross.angleBetween(vec1) * (180 / Math.PI)).toEqual(90);
    expect(cross.orthogonalTo(vec1)).toEqual(true);
    expect(cross.orthogonalTo(vec2)).toEqual(true);
  });

});
