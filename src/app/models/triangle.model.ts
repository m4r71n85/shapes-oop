import { MoodType } from './enums/mood-type.enum';
import { BaseShape } from './base-shape.model';
import { ShapeType } from './enums/shape-type.enum';
import { ShapeParams } from './shape-params.model';

export class Triangle extends BaseShape {
  private static readonly corners = 3;

  constructor(mood: MoodType) {
    super(ShapeType.Triangle, mood, Triangle.corners);
  }

  public submitParams(params: ShapeParams) {
    this.area = (params.sideB * params.height) / 2;
  }
}
