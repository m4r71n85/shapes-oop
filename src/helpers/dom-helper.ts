import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class DOMHelper<T> {
  private fixture: ComponentFixture<T>;
  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
  }

  clickButton(buttonText: string) {
    this.findAll('label.btn').forEach(button => {
      const buttonElement: HTMLButtonElement = button.nativeElement;
      if (buttonElement.textContent.trim() === buttonText) {
        buttonElement.click();
      }
    });
  }

  findAll(tagName: string) {
    return this.fixture.debugElement.queryAll(By.css(tagName));
  }
}
