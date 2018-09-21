import { DigitOnlyDirective } from './digit-only.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DigitOnlyDirective', () => {
  let component: TestDigitOnlyComponent;
  let fixture: ComponentFixture<TestDigitOnlyComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDigitOnlyComponent, DigitOnlyDirective]
    });
    fixture = TestBed.createComponent(TestDigitOnlyComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create an instance', () => {
    const directive = new DigitOnlyDirective();
    expect(directive).toBeTruthy();
  });

  it('component should accept digit input', () => {
    // inputEl.triggerEventHandler('keydown', { key: '2', bubbles: true, cancelable: true });
    // inputEl.triggerEventHandler('keydown', { key: 'A', bubbles: true, cancelable: true });
    // inputEl.triggerEventHandler('keydown', { key: '6', bubbles: true, cancelable: true });
    // fixture.detectChanges();
    // expect(inputEl.nativeElement.value).toBe('26');

    inputEl.nativeElement.dispatchEvent(
      new KeyboardEvent('keydown', { key: '2', bubbles: true, cancelable: true })
    );
    inputEl.nativeElement.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'A', bubbles: true, cancelable: true })
    );
    inputEl.nativeElement.dispatchEvent(
      new KeyboardEvent('keydown', { key: '0', bubbles: true, cancelable: true })
    );
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('26');
    // inputEl.triggerEventHandler('mouseout', null);
    // fixture.detectChanges();
    // console.log(inputEl.nativeElement.style.backgroundColor);
    // expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
  // it('should reformat pasted data', () => {
  //   component.onPaste(new ClipboardEvent('paste', {
  //     dataType: 'text/plain',
  //     data: '123\r123'
  //   }));
  //   expect(queryField.nativeElement.value).toBe('123, 123');
  // });
});

@Component({
  template: `<input type="text" digitOnly>`
})
class TestDigitOnlyComponent {}
