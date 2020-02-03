import { Triangle } from './../../models/triangle.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { ShapeComponent } from '../shape/shape.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from 'src/app/app.router';
import { ShapeType } from 'src/app/models/enums/shape-type.enum';
import { MoodType } from 'src/app/models/enums/mood-type.enum';
import { AppComponent } from 'src/app/app.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HomeComponent, ShapeComponent],
      imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        routing,
        BrowserAnimationsModule
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render title', () => {
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1.title').textContent).toContain(
  //     'Shapes Generator'
  //   );
  // });

  // it('should create a happy square', async(() => {
  //   let component = fixture.componentRef;

  //   console.log(component.instance);

  //   component.instance.createNewShape(ShapeType.Circle, MoodType.Happy);
  //   expect(component.instance.newShape.getMood()).toEqual(MoodType.Normal);
  // }));

  it('should be wtf', () => {
    expect(component.test()).toEqual('test');
  });

  it('should create triangle', () => {
    expect(
      component
        .createNewShape(ShapeType.Triangle, MoodType.SuperHappy)
        .getMood()
    ).toEqual(MoodType.SuperHappy);
  });
});
