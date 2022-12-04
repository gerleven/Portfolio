import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeHomePageComponent } from './about-me-home-page.component';

describe('AboutMeHomePageComponent', () => {
  let component: AboutMeHomePageComponent;
  let fixture: ComponentFixture<AboutMeHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
