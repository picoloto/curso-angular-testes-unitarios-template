import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';

import { FixtureDetectChangeComponent } from './fixture-detect-change.component';

describe('FixtureDetectChangeComponent', () => {
  let component: FixtureDetectChangeComponent;
  let fixture: ComponentFixture<FixtureDetectChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FixtureDetectChangeComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();

    fixture = TestBed.createComponent(FixtureDetectChangeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve renderizar titulo: Aprendendo a usar fixture.detectChange()', () => {
    let title = fixture.nativeElement.querySelector('h1');

    expect(title.textContent).toBe('Aprendendo a usar fixture.detectChange()');
  });
});
