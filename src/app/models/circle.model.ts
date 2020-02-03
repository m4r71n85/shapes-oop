import { ShapeParams } from './shape-params.model';
import { MoodType } from './enums/mood-type.enum';
import { BaseShape } from './base-shape.model';
import { ShapeType } from './enums/shape-type.enum';

export class Circle extends BaseShape {
  private static readonly corners = 0;
  private static readonly pi = 3.1415;

  constructor(mood: MoodType) {
    super(ShapeType.Circle, mood, Circle.corners);
  }

  public submitParams(params: ShapeParams) {
    this.area = params.radius * Circle.pi;
  }

  public getCornersDependOnMood(): number {
    switch (this.getMood()) {
      case MoodType.SuperHappy:
        return 10;
      case MoodType.Happy:
        return 5;
      default:
        return 0;
    }
  }
}
