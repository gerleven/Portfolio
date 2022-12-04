import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAppsHomePageComponent } from './angular-apps-home-page.component';

describe('AngularAppsHomePageComponent', () => {
  let component: AngularAppsHomePageComponent;
  let fixture: ComponentFixture<AngularAppsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAppsHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularAppsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
