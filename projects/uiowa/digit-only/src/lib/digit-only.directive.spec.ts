import { DigitOnlyDirective } from './digit-only.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('DigitOnlyDirective', () => {
  let component: TestDigitOnlyComponent;
  let fixture: ComponentFixture<TestDigitOnlyComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestDigitOnlyComponent, DigitOnlyDirective]
    }).compileComponents();
    fixture = TestBed.createComponent(TestDigitOnlyComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.directive(DigitOnlyDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new DigitOnlyDirective();
    expect(directive).toBeTruthy();
  });

  it('component should accept digit input', () => {
    // inputEl.triggerEventHandler('keydown', {
    //   key: '2',
    //   bubbles: true,
    //   cancelable: true
    // });
    // inputEl.triggerEventHandler('keydown', { key: 'A', bubbles: true, cancelable: true });
    // inputEl.triggerEventHandler('keydown', { key: '6', bubbles: true, cancelable: true });
    fixture.detectChanges();
    // expect(inputEl.nativeElement.value).toBe('26');

    // const event1 = new KeyboardEvent('keydown', {
    //   key: 'A',
    //   bubbles: true,
    //   cancelable: true
    // });
    // spyOn(event1, 'preventDefault');
    // expect(event1.preventDefault).not.toHaveBeenCalled();
    // inputEl.nativeElement.dispatchEvent(event1);
    // expect(event1.preventDefault).toHaveBeenCalled();

    const event2 = new KeyboardEvent('keydown', {
      code: '65',
      bubbles: true,
      cancelable: true
    });
    spyOn(event2, 'preventDefault');
    // expect(event2.preventDefault).not.toHaveBeenCalled();
    // inputEl.nativeElement.dispatchEvent(event2);
    // expect(event2.preventDefault).not.toHaveBeenCalled();

    const directive = new DigitOnlyDirective();
    expect(event2.preventDefault).not.toHaveBeenCalled();
    directive.onKeyDown(event2);
    expect(event2.preventDefault).not.toHaveBeenCalled();
    // inputEl.nativeElement.dispatchEvent(
    //   new KeyboardEvent('keydown', { key: 'A', bubbles: true, cancelable: true })
    // );
    // inputEl.nativeElement.dispatchEvent(
    //   new KeyboardEvent('keydown', { key: '0', bubbles: true, cancelable: true })
    // );
    fixture.detectChanges();
    // expect(inputEl.nativeElement.value).toBe('26');

    // inputEl.nativeElement.value = '2A0';
    // inputEl.nativeElement.dispatchEvent(new Event('input'));
    // expect(component.cardNumber).toBe('20');

    // inputEl.triggerEventHandler('mouseout', null);
    // fixture.detectChanges();
    // console.log(inputEl.nativeElement.style.backgroundColor);
    // expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });

  it('should reformat pasted data', () => {
    inputEl.nativeElement.dispatchEvent(
      new ClipboardEvent('paste', {
        dataType: 'text/plain',
        data: '123\r123'
      })
    );
    fixture.detectChanges();
    // expect(inputEl.nativeElement.value).toBe('123123');
    // expect(component.cardNumber).toBe('123123');
  });
});

@Component({
  template: `<input type="text" digitOnly [(ngModel)]="cardNumber">`
})
class TestDigitOnlyComponent {
  cardNumber: string;
}
