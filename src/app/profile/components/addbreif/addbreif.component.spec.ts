import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbreifComponent } from './addbreif.component';

describe('AddbreifComponent', () => {
  let component: AddbreifComponent;
  let fixture: ComponentFixture<AddbreifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbreifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbreifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
