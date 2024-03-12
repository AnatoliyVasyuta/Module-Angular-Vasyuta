import { Rhombus } from './Rhombus';

describe('Rhombus', () => {
  const base = 10; 
  const height = 15; 
  let rhombus: Rhombus;

  beforeEach(() => {
    rhombus = new Rhombus(base, height);
  });

  it('should calculate the correct area', () => {
    
    const expectedArea = base * height;
    expect(rhombus.area()).toBe(expectedArea);
  });

  it('should calculate the correct perimeter', () => {
    
    const expectedPerimeter = 4 * base;
    expect(rhombus.perimeter()).toBe(expectedPerimeter);
  });

  
});
