import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissioninfoComponent } from './missioninfo.component';

describe('MissioninfoComponent', () => {
  let component: MissioninfoComponent;
  let fixture: ComponentFixture<MissioninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissioninfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissioninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
