import { IsoscelesTriangle } from './IsoscelesTriangle';

describe('IsoscelesTriangle', () => {
  let triangle: IsoscelesTriangle;

  beforeEach(() => {
  
    triangle = new IsoscelesTriangle(10, 5);
  });

  it('#area should calculate the correct area of the triangle', () => {
    
    const expectedArea = (10 * 5) / 2;
    expect(triangle.area()).toEqual(expectedArea);
  });

  it('#perimeter should calculate the correct perimeter of the triangle', () => {

    const sideLength = Math.sqrt(Math.pow(10 / 2, 2) + Math.pow(5, 2));
    const expectedPerimeter = 10 + 2 * sideLength;
    expect(triangle.perimeter()).toEqual(expectedPerimeter);
  });
});
