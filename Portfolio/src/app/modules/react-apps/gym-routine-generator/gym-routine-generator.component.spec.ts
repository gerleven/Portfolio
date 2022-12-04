import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymRoutineGeneratorComponent } from './gym-routine-generator.component';

describe('GymRoutineGeneratorComponent', () => {
  let component: GymRoutineGeneratorComponent;
  let fixture: ComponentFixture<GymRoutineGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymRoutineGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymRoutineGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
