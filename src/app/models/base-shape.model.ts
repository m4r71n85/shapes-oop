import { ShapeParams } from './shape-params.model';
import { ShapeType } from './enums/shape-type.enum';
import { MoodType } from './enums/mood-type.enum';

export abstract class BaseShape {
  private readonly shapeType: ShapeType;
  private readonly corners: number;
  private readonly moodType: MoodType;
  public area: number;

  constructor(shapeType: ShapeType, moodType: MoodType, corners: number) {
    this.shapeType = shapeType;
    this.corners = corners;
    this.moodType = moodType;
  }

  public getArea(): number {
    return this.area;
  }
  public abstract submitParams(params: ShapeParams);

  public getCornersDependOnMood() {
    return this.corners * this.getCoeficient();
  }
  public getMood() {
    return this.moodType;
  }
  public getType() {
    return this.shapeType;
  }

  private getCoeficient() {
    switch (this.moodType) {
      case MoodType.SuperHappy:
        return 3;
      case MoodType.Happy:
        return 2;
      default:
        return 1;
    }
  }
}
