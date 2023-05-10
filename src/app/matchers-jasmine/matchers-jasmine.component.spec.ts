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
    // expect([1,2]).toEqual([1,2,3]) -> verificar não apenas length, mas também conteúdo
  })

  it('Deve testar o uso do matcher toBe', () => {
    let names = ['Leandro', 'Carlos', 'Jose'];

    expect(names).toBe(names);
    // expect(names).toEqual(['Leandro', 'Carlos', 'Jose']) -> considera o mesmo objeto, mesma referencia, etc
  })

  it('Deve testar o uso do matcher toBeTruthy', () => {
    expect(true).toBeTruthy();
    // expect(0).toBeTruthy() -> considera a conversão do valor para testar o bool
  })

  it('Deve testar o uso do matcher toBeFalsy', () => {
    expect(false).toBeFalsy();
    // expect(1).toBeFalsy() -> considera a conversão do valor para testar o bool
  })

  it('Deve testar o uso do matcher toBeTrue', () => {
    expect(true).toBeTrue();
    // expect(false).toBeTrue() ->considera o valor bool
  })

  it('Deve testar o uso do matcher toBeFalse', () => {
    expect(false).toBeFalse();
    // expect(true).toBeTrue() -> verifica o valor considerando bool
  })

  it('Deve testar o uso do matcher not', () => {
    expect(false).not.toBeTrue();
    // expect(true).not.toBeTrue() -> O not é igual ao ! de uma comparação bool
  })

  it('Deve testar o uso do matcher toContain', () => {
    expect('false').toContain('se');
    expect([1,2]).toContain(1);
    // expect('true').toContain('se') -> verifica se contain o dado informado. Funciona com string, array...
  })

  it('Deve testar o uso do matcher toBeDefined', () => {
    let teste = 'abc';
    expect(teste).toBeDefined();
    // let teste;
    // expect(teste).toBeDefined() -> Verifica se a variavel é != undefined
  })

  it('Deve testar o uso do matcher toBeUndefined', () => {
    let teste;
    expect(teste).toBeUndefined();
    // let teste = 'abc';
    // expect(teste).toBeUndefined() -> Verifica se a variavel é == undefined
  })

  it('Deve testar o uso do matcher toBeNull', () => {
    expect(null).toBeNull();
    expect('abc').not.toBeNull();
    // expect('abc').toBeNull() -> Verifica se é null
  })

  it('Deve testar o uso do matcher toBeNaN', () => {
    expect(NaN).toBeNaN();
    // expect('NaN').toBeNaN() -> Verifica se é NaN
  })

  it('Deve testar o uso do matcher toBeGreaterThan', () => {
    expect(10).toBeGreaterThan(1);
    // expect(10).toBeGreaterThan(11) -> Verifica se é maior que o expect
  })

  it('Deve testar o uso do matcher toBeLessThan', () => {
    expect(10).toBeLessThan(11);
    // expect(11).toBeLessThan(10) -> Verifica se é menor que o expect
  })

});


