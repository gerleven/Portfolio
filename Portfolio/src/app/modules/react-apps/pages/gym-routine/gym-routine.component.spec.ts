import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymRoutineComponent } from './gym-routine.component';

describe('GymRoutineComponent', () => {
  let component: GymRoutineComponent;
  let fixture: ComponentFixture<GymRoutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymRoutineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
