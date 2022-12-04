import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvResumeHomePageComponent } from './cv-resume-home-page.component';

describe('CvResumeHomePageComponent', () => {
  let component: CvResumeHomePageComponent;
  let fixture: ComponentFixture<CvResumeHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvResumeHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvResumeHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
