import { TestBed } from '@angular/core/testing';

import { GuardGuard } from './guard.guard';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

const loginRoute = '/login';
const extractRoute = '/extrato';

describe('GuardGuard', () => {
  let guard: GuardGuard;
  let routeMock: any = { snapshot: {} };
  let routeLoginMock: any = { snapshot: {}, url: loginRoute };
  let routeExtractMock: any = { snapshot: {}, url: extractRoute };
  let navigateSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: navigateSpy }],
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(GuardGuard);
    localStorage.removeItem('token');
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('Deve redirecionar usuário para página de login quando não tiver token', () => {
    expect(guard.canActivate(routeMock, routeLoginMock)).toBeFalse();
    expect(navigateSpy.navigate).toHaveBeenCalledWith([loginRoute]);
  });

  it('Deve conceder acesso quando usuário tiver token', () => {
    const token = 'teste';
    localStorage.setItem('token', token);

    expect(guard.canActivate(routeMock, routeLoginMock)).toBeTrue();
  });
});
