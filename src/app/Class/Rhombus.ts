import { TwoDimentionShape } from './TwoDimentionShape';
export class Rhombus extends TwoDimentionShape {
    constructor(private base: number, private height: number) {
      super();
    }
  
    area(): number {
      return (this.base * this.height) / 2;
    }
  
    perimeter(): number {
     
    
      return 4 * this.base;
    }
  }
  