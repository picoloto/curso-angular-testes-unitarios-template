import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponentComponent } from './testing-component.component';
import { By } from '@angular/platform-browser';

describe('TestingComponentComponent', () => {
  let component: TestingComponentComponent;
  let fixture: ComponentFixture<TestingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve acessar elemento na DOM com debugElement.query()', () => {
    let element = fixture.debugElement.query(By.css('h1')).nativeElement;

    expect(element.textContent).toBe(
      'Trabalhando com debugElement.query() e nativeElement.querySelector()'
    );
  });

  it('Deve acessar elemento na DOM com nativeElement.querySelector()', () => {
    let element = fixture.debugElement.nativeElement.querySelector('p');

    expect(element.textContent).toBe(
      'esta aprendendo com curso de testes unitarios?'
    );
  });

  it('Deve ter background-color green no botão SIM', () => {
    let element = fixture.debugElement.query(By.css('.btn-yes')).nativeElement;

    expect(element.style.backgroundColor).toBe('green');
  });

  it('Deve ter background-color red no botão NÃO', () => {
    let element = fixture.debugElement.nativeElement.querySelector('.btn-no');

    expect(element.style.backgroundColor).toBe('red');
  });
});
