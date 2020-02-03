import { Triangle } from './../models/triangle.model';
import { Square } from './../models/square.model';
import { Rectangle } from './../models/rectangle.model';
import { Circle } from './../models/circle.model';
import { BaseShape } from 'src/app/models/base-shape.model';
import { MoodType } from './../models/enums/mood-type.enum';
import { ShapeType } from './../models/enums/shape-type.enum';
export class ShapeFactory {
  public static CreateShape(
    shapeType: ShapeType,
    moodType: MoodType
  ): BaseShape {
    switch (shapeType) {
      case ShapeType.Circle:
        return new Circle(moodType);
      case ShapeType.Rectangle:
        return new Rectangle(moodType);
      case ShapeType.Square:
        return new Square(moodType);
      case ShapeType.Triangle:
        return new Triangle(moodType);
    }
  }
}
