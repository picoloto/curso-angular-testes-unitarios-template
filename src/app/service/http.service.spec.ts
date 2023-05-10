import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;
  let url: any;
  let usersUrl: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
    url = 'http://localhost:3000';
    usersUrl = `${url}/users`;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar chamada Get por id', () => {
    const id = 3;
    const fullUrl = `${usersUrl}/${id}`;
    const response = { name: 'Leandro' };

    service.getUsersById(id).subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(fullUrl);
    request.flush(response);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(fullUrl);
  });

  it('Deve realizar chamada GET para obter usuários', () => {
    const response = [{ name: 'Leandro' }, { name: 'Leandro 2' }];

    service.getUsers().subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(usersUrl);
    request.flush(response);

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(usersUrl);
  });
});
