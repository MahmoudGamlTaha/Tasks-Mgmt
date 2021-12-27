import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFinancialSettlementComponent } from './new-financial-settlement.component';

describe('NewFinancialSettlementComponent', () => {
  let component: NewFinancialSettlementComponent;
  let fixture: ComponentFixture<NewFinancialSettlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFinancialSettlementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFinancialSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
