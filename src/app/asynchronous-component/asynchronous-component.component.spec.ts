import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';

import { AsynchronousComponentComponent } from './asynchronous-component.component';
import { HttpService } from '../service/http.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

const RESPONSE = [{ name: 'Leandro' }, { name: 'Leandro 2' }];

describe('AsynchronousComponentComponent', () => {
  let component: AsynchronousComponentComponent;
  let fixture: ComponentFixture<AsynchronousComponentComponent>;
  let httpService: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AsynchronousComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponentComponent);
    component = fixture.componentInstance;
    httpService = TestBed.inject(HttpService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve fazer request (Observable) para obter lista de usuários', () => {
    spyOn(httpService, 'getUsers').and.returnValue(of(RESPONSE));

    component.getUsers();
    expect(component.data).toEqual(RESPONSE);
  });

  it('Deve fazer request (Promise) para obter lista de usuários', async () => {
    spyOn(httpService, 'getUsersWithPromise').and.returnValue(
      Promise.resolve(RESPONSE)
    );

    await component.getUsersWithPromise();
    expect(component.dataPromise).toEqual(RESPONSE);
  });

  it('Deve logar usuário', (done: DoneFn) => {
    const loggedOut = By.css('.logged-out');
    const logged = By.css('.logged');

    let spy = spyOn(httpService, 'isAuthenticated').and.returnValue(
      Promise.resolve(true)
    );

    expect(fixture.debugElement.query(loggedOut)).not.toBeNull();
    expect(
      fixture.debugElement.query(loggedOut).nativeElement.textContent
    ).toBe('Deslogado');
    expect(fixture.debugElement.query(logged)).toBeNull();

    component.isAuthenticaded();

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();

      expect(fixture.debugElement.query(logged)).not.toBeNull();
      expect(fixture.debugElement.query(logged).nativeElement.textContent).toBe(
        'Logado'
      );
      expect(fixture.debugElement.query(loggedOut)).toBeNull();
      done();
    });
  });

  it('Deve logar usuário com whenStable', async () => {
    const loggedOut = By.css('.logged-out');
    const logged = By.css('.logged');

    spyOn(httpService, 'isAuthenticated').and.returnValue(
      Promise.resolve(true)
    );

    expect(
      fixture.debugElement.query(loggedOut).nativeElement.textContent
    ).toBe('Deslogado');

    component.isAuthenticaded();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(fixture.debugElement.query(logged)).not.toBeNull();
      expect(fixture.debugElement.query(logged).nativeElement.textContent).toBe(
        'Logado'
      );
      expect(fixture.debugElement.query(loggedOut)).toBeNull();
    });
  });

  it('Deve setar nome', fakeAsync(() => {
    component.defineValue();

    expect(component.name).toBe('Danilo');
    tick(100);
    expect(component.name).toBe('Jessica');
    flush();
  }));
});
