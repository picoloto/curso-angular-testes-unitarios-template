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

  it('Deve gerar erro ao obter usuários', () => {
    service.getUsers().subscribe({
      error: (e) => {
        expect(e.status).toBe(500);
      },
    });

    const request = httpTestingController.expectOne(usersUrl);
    request.flush(null, {
      status: 500,
      statusText: 'Erro de rede',
    });

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(usersUrl);
  });

  it('Deve fazer requisição POST para cadastrar usuário', () => {
    const user = { name: 'Leandro' };

    service.postUser(user).subscribe((res) => {
      expect(res).toBe(user);
    });

    const request = httpTestingController.expectOne(usersUrl);

    expect(request.request.method).toBe('POST');
    expect(request.request.url).toBe(usersUrl);

    request.flush(user);
  });

  it('Deve fazer requisição PUT para editar usuário', () => {
    const user = { name: 'Leandro' };
    const id = 3;
    const fullUrl = `${usersUrl}/${id}`;

    service.putUser(id, user).subscribe((res) => {
      expect(res).toBe(user);
    });

    const request = httpTestingController.expectOne(fullUrl);

    expect(request.request.method).toBe('PUT');
    expect(request.request.url).toBe(fullUrl);

    request.flush(user);
  });

  it('Deve fazer requisição DELETE para remover usuário', () => {
    const id = 3;
    const fullUrl = `${usersUrl}/${id}`;

    service.deleteUser(id).subscribe((res) => {
      expect(res).toBeNull();
    });

    const request = httpTestingController.expectOne(fullUrl);

    expect(request.request.method).toBe('DELETE');
    expect(request.request.url).toBe(fullUrl);

    request.flush(null);
  });

  it('Deve conter headers na requisição', () => {
    const token = 'Bearer wa45a5a45a5a5a4a5a4a5a55a5a5a5a5a5a5a';
    const response = [{ name: 'Leandro' }, { name: 'Leandro 2' }];
    service.getUserWithHeaders().subscribe((res) => {
      expect(res).toBe(response);
    });

    const request = httpTestingController.expectOne(usersUrl);

    expect(request.request.headers.has('content-type')).toEqual(true);
    expect(request.request.headers.has('Authorization')).toEqual(true);
    expect(request.request.headers.get('Authorization')).toEqual(token);
    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(usersUrl);

    request.flush(response);
  });
});
