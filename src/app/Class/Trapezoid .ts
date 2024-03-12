import { TwoDimentionShape } from './TwoDimentionShape';
//import { TwoDimensionShape } from './TwoDimensionShape';

export class EquilateralTrapezoid extends TwoDimentionShape {
    private base: number; 
    private base2: number; 
    private height: number; 
    private side: number; 

    constructor(base: number, base2: number, height: number) {
        super();
        this.base = base;
        this.base2 = base2;
        this.height = height;
       
    }

    area(): number {
        return (this.base + this.base2) / 2 * this.height;
    }

    perimeter(): number {
        return this.base + this.base2 + 2 * this.height;
    }
}
