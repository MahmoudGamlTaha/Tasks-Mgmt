import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceinfoComponent } from './workspaceinfo.component';

describe('WorkspaceinfoComponent', () => {
  let component: WorkspaceinfoComponent;
  let fixture: ComponentFixture<WorkspaceinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
