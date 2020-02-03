import { BaseShape } from './base-shape.model';
import { ShapeType } from './enums/shape-type.enum';
import { MoodType } from './enums/mood-type.enum';
import { ShapeParams } from './shape-params.model';

export class Rectangle extends BaseShape {
  private static readonly corners = 4;

  constructor(mood: MoodType, shapeType: ShapeType = ShapeType.Rectangle) {
    super(shapeType, mood, Rectangle.corners);
  }

  public submitParams(params: ShapeParams) {
    this.area = params.sideA * params.sideB;
  }
}
