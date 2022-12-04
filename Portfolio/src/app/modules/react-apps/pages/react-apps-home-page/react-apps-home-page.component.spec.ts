import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactAppsHomePageComponent } from './react-apps-home-page.component';

describe('ReactAppsHomePageComponent', () => {
  let component: ReactAppsHomePageComponent;
  let fixture: ComponentFixture<ReactAppsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactAppsHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactAppsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
