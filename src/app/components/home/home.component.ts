import { ShapeType } from './../../models/enums/shape-type.enum';
import { MoodType } from './../../models/enums/mood-type.enum';
import { Component } from '@angular/core';
import { BaseShape } from 'src/app/models/base-shape.model';
import { ShapeFactory } from 'src/app/factories/shape.factory';
import { ShapeParams } from 'src/app/models/shape-params.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public newShape: BaseShape;
  public shapeParams: ShapeParams;
  public selectedShape: ShapeType = ShapeType.Circle;
  public selectedMood: MoodType = MoodType.Happy;
  public allShapes: BaseShape[] = new Array();

  public shapeTypes = ShapeType;
  public moodTypes = MoodType;

  constructor() {
    this.reset();
  }

  public createNewShape(shape: ShapeType, mood: MoodType): BaseShape {
    this.newShape = ShapeFactory.CreateShape(shape, mood);
    return this.newShape;
  }

  public test(): string {
    return 'test';
  }
  public submitShape() {
    this.newShape.submitParams(this.shapeParams);
    this.allShapes.push(this.newShape);
    this.reset();
  }

  public getTotalArea() {
    let sum = 0;
    this.allShapes.forEach(shape => {
      sum += shape.getArea();
    });
    return sum;
  }

  private reset() {
    this.shapeParams = new ShapeParams();
    this.newShape = ShapeFactory.CreateShape(
      this.selectedShape,
      this.selectedMood
    );
  }
}
