import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubServiceComponent } from './stub-service.component';
import { Router } from '@angular/router';

describe('StubServiceComponent', () => {
  let component: StubServiceComponent;
  let fixture: ComponentFixture<StubServiceComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StubServiceComponent ],
      providers: [{
        provide: Router,
        useClass: class{
          navigate = jasmine.createSpy('navigate')
        }
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StubServiceComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve navegar para home quando clicar no botão', () => {
    component.goTo();
    expect(router.navigate).toHaveBeenCalledWith(['/home'])
  });
});
