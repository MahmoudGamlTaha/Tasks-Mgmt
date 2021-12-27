import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusfinanceComponent } from './statusfinance.component';

describe('StatusfinanceComponent', () => {
  let component: StatusfinanceComponent;
  let fixture: ComponentFixture<StatusfinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusfinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
