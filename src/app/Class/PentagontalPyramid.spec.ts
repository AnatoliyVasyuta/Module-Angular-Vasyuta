import { PentagonalPyramid } from './PentagontalPyramid';


describe('PentagonalPyramid', () => {
  let pyramid: PentagonalPyramid;

  beforeEach(() => {
    pyramid = new PentagonalPyramid(10, 20);
  });

  it('should calculate the correct volume', () => {
    expect(pyramid.volume()).toBeCloseTo((5/12) * 20 * Math.pow(10, 2) * Math.sqrt(5 + 2 * Math.sqrt(5)), 2);
  });

  it('should calculate the correct surface area', () => {
    const baseArea = (5 * Math.pow(10, 2)) / (4 * Math.tan(Math.PI / 5));
    const slantHeight = Math.sqrt(Math.pow(20, 2) + Math.pow(10 / (2 * Math.tan(Math.PI / 5)), 2));
    const sideArea = (5 * 10 * slantHeight) / 2;
    expect(pyramid.surfaceArea()).toBeCloseTo(baseArea + sideArea, 2);
  });

  it('should calculate the correct inscribed circle radius', () => {
    expect(pyramid.inscribedCircleRadius()).toBeCloseTo(10 / (2 * Math.tan(Math.PI / 5)), 2);
  });

  it('should calculate the correct circumscribed circle radius', () => {
    expect(pyramid.circumscribedCircleRadius()).toBeCloseTo(10 / (2 * Math.sin(Math.PI / 5)), 2);
  });
});
