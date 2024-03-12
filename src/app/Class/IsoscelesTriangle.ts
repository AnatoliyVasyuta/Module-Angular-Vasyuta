import { TwoDimentionShape } from './TwoDimentionShape';
export class IsoscelesTriangle extends TwoDimentionShape {
    constructor(private base: number, private height: number) {
      super();
    }
  
    area(): number {
      return (this.base * this.height) / 2;
    }
  
    perimeter(): number {
      const sideLength = Math.sqrt(Math.pow(this.base / 2, 2) + Math.pow(this.height, 2));
      return this.base + 2 * sideLength;
    }
  }
  