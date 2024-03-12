import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwoDimensionComponent } from './two-dimention-component/two-dimention-component.component';
import { ThreeDimentionComponentComponent } from './three-dimention-component/three-dimention-component.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ThreeDimentionComponentComponent,TwoDimensionComponent,HeaderComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moduleProjectAnatoliy';
}
