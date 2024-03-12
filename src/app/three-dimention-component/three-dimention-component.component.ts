import { Component } from '@angular/core';
import{PentagonalPyramid} from '../Class/PentagontalPyramid'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-three-dimention-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './three-dimention-component.component.html',
  styleUrl: './three-dimention-component.component.css'
})
export class ThreeDimentionComponentComponent {
  sideLength: number = 0;
  height: number = 0;
  volume: number | null = null;
  surfaceArea: number | null = null;
  inscribedCircleRadius: number | null = null;
  circumscribedCircleRadius: number | null = null;

  calculateVolume() {
    const pyramid = new PentagonalPyramid(this.sideLength, this.height);
    this.volume = pyramid.volume();
    this.surfaceArea = pyramid.surfaceArea();
    this.inscribedCircleRadius = pyramid.inscribedCircleRadius();
    this.circumscribedCircleRadius = pyramid.circumscribedCircleRadius();
  }
}
