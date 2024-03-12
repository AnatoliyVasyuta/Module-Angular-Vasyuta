import { Component } from '@angular/core';
import { IsoscelesTriangle } from '../Class/IsoscelesTriangle'; // Импортируйте IsoscelesTriangle (проверьте правильность пути)
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TwoDimentionShape} from  '../Class/TwoDimentionShape'; 
import { Rhombus } from '../Class/Rhombus'; 
import { EquilateralTrapezoid } from '../Class/Trapezoid ';
@Component({
  selector: 'app-two-dimension',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './two-dimention-component.component.html',
  styleUrls: ['./two-dimention-component.component.css']
})
export class TwoDimensionComponent {
  base: number = 0;
  height: number = 0;
  perimeter: number | null = null;
  area: number | null = null;
  perimeterR: number | null = null;
  areaR: number | null = null;
  perimeterT: number | null = null;
  areaT: number | null = null;
  calculate() {
    const triangle = new IsoscelesTriangle(this.base, this.height);
    this.perimeter = triangle.perimeter();
    this.area = triangle.area();
    const rhombus = new  Rhombus(this.base, this.height / 2);
    this.perimeterR = rhombus.perimeter();
    this.areaR = rhombus.area();
    const trapezoid = new  EquilateralTrapezoid(this.base, this.height, this.height / 2);
    this.perimeterT = trapezoid.perimeter();
    this.areaT = trapezoid.area();
  }
}
