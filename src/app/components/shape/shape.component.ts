import { BaseShape } from 'src/app/models/base-shape.model';
import { Component, Input } from '@angular/core';
import { MoodType } from 'src/app/models/enums/mood-type.enum';
import { ShapeType } from 'src/app/models/enums/shape-type.enum';

@Component({
  selector: 'shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.less']
})
export class ShapeComponent {
  public moodTypes = MoodType;
  public shapeTypes = ShapeType;
  @Input() shape: BaseShape;
  @Input() isSmall: boolean;
  constructor() {}
}
