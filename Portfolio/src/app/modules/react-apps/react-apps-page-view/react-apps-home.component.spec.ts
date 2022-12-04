import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactAppsHomeComponent } from './react-apps-home.component';

describe('ReactAppsHomeComponent', () => {
  let component: ReactAppsHomeComponent;
  let fixture: ComponentFixture<ReactAppsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactAppsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactAppsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
