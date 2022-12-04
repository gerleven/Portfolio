import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAppsHomeComponent } from './angular-apps-home.component';

describe('AngularAppsHomeComponent', () => {
  let component: AngularAppsHomeComponent;
  let fixture: ComponentFixture<AngularAppsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAppsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularAppsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
