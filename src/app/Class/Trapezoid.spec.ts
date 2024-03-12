import { EquilateralTrapezoid } from './Trapezoid ';

describe('EquilateralTrapezoid', () => {
  let trapezoid: EquilateralTrapezoid;

  beforeEach(() => {
   
    trapezoid = new EquilateralTrapezoid(10, 20, 5);
  });

  it('#area should calculate the correct area of the trapezoid', () => {

    const expectedArea = ((10 + 20) / 2) * 5;
    expect(trapezoid.area()).toEqual(expectedArea);
  });
})
