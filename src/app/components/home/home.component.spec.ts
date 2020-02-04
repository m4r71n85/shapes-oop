import { Triangle } from './../../models/triangle.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { ShapeComponent } from '../shape/shape.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, By } from '@angular/platform-browser';
import { routing } from 'src/app/app.router';
import { ShapeType } from 'src/app/models/enums/shape-type.enum';
import { MoodType } from 'src/app/models/enums/mood-type.enum';
import { AppComponent } from 'src/app/app.component';
import { DOMHelper } from 'src/helpers/dom-helper';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dh: DOMHelper<HomeComponent>;

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
    // fixture.detectChanges();
    dh = new DOMHelper(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title 'Shapes Generator'`, () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Shapes Generator'
    );
  });

  it('should have description longer than 10 characters', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p.lead').textContent.length).toBeGreaterThan(
      10
    );
  });

  it('should have 4 select-shape buttons', () => {
    let compiled = fixture.debugElement;
    dh.findAll('.shape-selector .btn');
    expect(compiled.queryAll(By.css('.shape-selector .btn')).length).toEqual(4);
  });

  it('should have 3 select-mood buttons', () => {
    let compiled = fixture.debugElement;
    expect(compiled.queryAll(By.css('.mood-selector .btn')).length).toEqual(3);
  });

  it(`initial figure should be a 'circle'`, () => {
    let compiled = fixture.debugElement.nativeElement;
    var selectedButtonText = compiled
      .querySelector('.shape-selector .btn')
      .textContent.trim();
    expect(selectedButtonText).toEqual('Circle');
  });

  it(`initial mood should be a 'happy'`, () => {
    let compiled = fixture.debugElement.nativeElement;
    var selectedButtonText = compiled
      .querySelector('.mood-selector .btn')
      .textContent.trim();
    expect(selectedButtonText).toEqual('Normal');
  });

  it('Should call createNewShape once when we click select-shape button', () => {
    spyOn(component, 'createNewShape');
    dh.clickButton('Square');
    expect(component.createNewShape).toHaveBeenCalledTimes(1);
  });

  it('Should call createNewShape once when we click select-mood button', () => {
    spyOn(component, 'createNewShape');
    dh.clickButton('Super Happy');
    expect(component.createNewShape).toHaveBeenCalledTimes(1);
  });
});
