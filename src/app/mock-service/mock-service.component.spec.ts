import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockServiceComponent } from './mock-service.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MockServiceComponent', () => {
  let component: MockServiceComponent;
  let fixture: ComponentFixture<MockServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MockServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MockServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
