import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormLoginComponent } from './form-login.component';
import { HttpService } from '../service/http.service';
import { of } from 'rxjs/internal/observable/of';

const emailValue = 'leandro@teste.com';
const passwordValue = 'teste';

const payload = {
  email: emailValue,
  password: passwordValue,
};

describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;
  let httpService: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      declarations: [FormLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    setForm(true);
    httpService = TestBed.inject(HttpService);

    fixture.detectChanges();
  });

  function setForm(mustHaveValue?: boolean) {
    component.form.controls['email'].setValue(
      mustHaveValue ? emailValue : null
    );
    component.form.controls['password'].setValue(
      mustHaveValue ? passwordValue : null
    );
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve retornar formulário inválido', () => {
    setForm();
    const result = component.isValidForm();

    expect(result).toBeFalse();
  });

  it('Deve retornar formulário valido', () => {
    const result = component.isValidForm();

    expect(result).toBeTrue();
  });

  it('Deve desabilitar botão quando o formulário for inválido', () => {
    setForm();
    fixture.detectChanges();

    const button =
      fixture.debugElement.nativeElement.querySelector('.btn-login');

    expect(button.disabled).toBeTrue();
  });

  it('Deve habilitar botão quando o formulário for válido', () => {
    fixture.detectChanges();

    const button =
      fixture.debugElement.nativeElement.querySelector('.btn-login');

    expect(button.disabled).toBeFalse();
  });

  it('Deve retornar o valor de um controle de formulário', () => {
    expect(component.getValueControl(component.form, 'password')).toEqual(
      passwordValue
    );
  });

  it('Deve criar payload para submeter para API', () => {
    expect(component.createPayload()).toEqual(payload);
  });

  it('Deve realizar login', () => {
    let spied = spyOn(httpService, 'login').and.returnValue(of(payload));

    component.isValidForm();
    component.login();

    expect(spied).toHaveBeenCalledTimes(1);
  });
});
