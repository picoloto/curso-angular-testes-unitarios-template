import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { MyServiceService } from './my-service.service';

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

class MyServiceMock extends MyServiceService {
  override getUsers() {
    return of(RESPONSE)
  }

}

describe('MyServiceMock', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: MyServiceService,
          useClass: MyServiceMock
        }
      ]
    });
    service = TestBed.inject(MyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar chamada HTTP', () => {
    service.getUsers().subscribe(res => {
      expect(res).toEqual(RESPONSE);
    })

  });


});
