import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoverFocusDirective } from '../hover-focus.directive';

import { TestingDirectiveComponent } from './testing-directive.component';
import { By } from '@angular/platform-browser';

describe('TestingDirectiveComponent', () => {
  let component: TestingDirectiveComponent;
  let fixture: ComponentFixture<TestingDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingDirectiveComponent, HoverFocusDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve alterar o backgroundColor quando passar o mouse sobre o title', () => {
    const title = fixture.debugElement.query(By.css('h1'));

    title.triggerEventHandler('mouseover', null);
    fixture.detectChanges();

    expect(title.nativeElement.style.backgroundColor).toBe('blue');

    title.triggerEventHandler('mouseout', null);
    fixture.detectChanges();

    expect(title.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
