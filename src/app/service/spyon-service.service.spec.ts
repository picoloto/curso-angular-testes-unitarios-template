import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SpyonServiceService } from './spyon-service.service';
import { of } from 'rxjs/internal/observable/of';

const RESPONSE = [
  {
    'name': 'Leandro',
    'email': 'leandro@teste.com',
    'age': 30,
    'id': 1,
  },
  {
    'name': 'Leandro 2',
    'email': 'leandro 2@teste.com',
    'age': 31,
    'id': 2,
  }
];

describe('SpyonServiceService', () => {
  let service: SpyonServiceService;
  const logger = jasmine.createSpy('log');
  const status = jasmine.createSpyObj('service', ['name', 'age', 'email'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpyonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar lista de usuários', () => {
    spyOn(service, 'getUsers').and.returnValue(of(RESPONSE));

    service.getUsers().subscribe(res => {
      expect(res).toEqual(RESPONSE);
    })
  });

  it('Deve criar método com jasmine.createSpy', () => {
    const log = 'loguei no sistema';
    logger(log);

    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith(log);
  });

  it('Deve criar métodos com jasmine.createSpyObj', () => {
    const name = 'leandro';
    const email = 'leandro@leandro.com';
    const age = 30;

    status.name(name);
    status.email(email);
    status.age(age);

    expect(status.name).toHaveBeenCalledTimes(1);
    expect(status.name).toHaveBeenCalledWith(name);

    expect(status.email).toHaveBeenCalledTimes(1);
    expect(status.email).toHaveBeenCalledWith(email);

    expect(status.age).toHaveBeenCalledTimes(1);
    expect(status.age).toHaveBeenCalledWith(age);
  });
});
