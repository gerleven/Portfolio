import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThisProjectPageComponent } from './about-this-project-page.component';

describe('AboutThisProjectPageComponent', () => {
  let component: AboutThisProjectPageComponent;
  let fixture: ComponentFixture<AboutThisProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutThisProjectPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutThisProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
