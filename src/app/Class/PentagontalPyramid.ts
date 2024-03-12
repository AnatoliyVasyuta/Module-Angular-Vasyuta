import { ThreeDimentionShape } from './threeDimentionsShape';

export class PentagonalPyramid extends ThreeDimentionShape{
    constructor(private sideLength: number, private height: number) {
        super();
    }
  
    volume(): number {
      return (5/12) * this.height * Math.pow(this.sideLength, 2) * Math.sqrt(5 + 2 * Math.sqrt(5));
    }
    surfaceArea():number{
        const baseArea = (5 * this.sideLength * this.sideLength) / (4 * Math.tan(Math.PI / 5));
        const slantHeight = Math.sqrt(this.height * this.height + (this.sideLength / (2 * Math.tan(Math.PI / 5))) * (this.sideLength / (2 * Math.tan(Math.PI / 5))));
        const sideArea = (5 * this.sideLength * slantHeight) / 2;
        return baseArea + sideArea;
        
    }

     inscribedCircleRadius(): number {
       return this.sideLength / (2 * Math.tan(Math.PI / 5));
   }
   circumscribedCircleRadius(): number {
    return this.sideLength / (2 * Math.sin(Math.PI / 5));
}
  }
  