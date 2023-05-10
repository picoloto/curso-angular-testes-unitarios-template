import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersJasmineComponent } from './matchers-jasmine.component';

describe('MatchersJasmineComponent', () => {
  let component: MatchersJasmineComponent;
  let fixture: ComponentFixture<MatchersJasmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersJasmineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersJasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve testar o uso do matcher toEqual', () => {
    expect(true).toEqual(true);
    expect([1,2]).toEqual([1,2])
    // expect([1,2]).toEqual([1,2,3]) -> O toEqual considera não apenas length, mas também conteúdo
  })

  it('Deve testar o uso do matcher toBe', () => {
    let names = ['Leandro', 'Carlos', 'Jose'];

    expect(names).toBe(names);
    // expect(names).toEqual(['Leandro', 'Carlos', 'Jose']) -> O toBe considera o mesmo objeto, mesma referencia, etc
  })

  it('Deve testar o uso do matcher toBeTruthy', () => {
    expect(true).toBeTruthy();
    // expect(0).toBeTruthy() -> O toBeTruthy considera a conversão do valor para testar o bool
  })

  it('Deve testar o uso do matcher toBeFalsy', () => {
    expect(false).toBeFalsy();
    // expect(1).toBeTruthy() -> O toBeFalsy considera a conversão do valor para testar o bool
  })

});


