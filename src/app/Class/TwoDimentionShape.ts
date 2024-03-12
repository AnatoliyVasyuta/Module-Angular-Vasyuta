import { Shape } from './Shape';

export abstract class TwoDimentionShape implements Shape {
  abstract area(): number;
  abstract perimeter(): number;
}
