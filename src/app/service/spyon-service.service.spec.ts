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
});
