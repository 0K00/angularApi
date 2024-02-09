import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTaskByIdComponent } from './get-task-by-id.component';

describe('GetTaskByIdComponent', () => {
  let component: GetTaskByIdComponent;
  let fixture: ComponentFixture<GetTaskByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetTaskByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetTaskByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
