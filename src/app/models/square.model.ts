import { Rectangle } from './rectangle.model';
import { ShapeType } from './enums/shape-type.enum';
import { MoodType } from './enums/mood-type.enum';
import { ShapeParams } from './shape-params.model';

export class Square extends Rectangle {
  constructor(mood: MoodType) {
    super(mood, ShapeType.Square);
  }

  public submitParams(params: ShapeParams) {
    params.sideB = params.sideA;
    super.submitParams(params);
  }
}
