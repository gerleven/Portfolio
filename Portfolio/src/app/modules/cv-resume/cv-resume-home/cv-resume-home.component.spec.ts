import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvResumeHomeComponent } from './cv-resume-home.component';

describe('CvResumeHomeComponent', () => {
  let component: CvResumeHomeComponent;
  let fixture: ComponentFixture<CvResumeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvResumeHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvResumeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
