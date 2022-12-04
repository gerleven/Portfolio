import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadExampleAppComponent } from './lazyload-example-app.component';

describe('LazyloadExampleAppComponent', () => {
  let component: LazyloadExampleAppComponent;
  let fixture: ComponentFixture<LazyloadExampleAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloadExampleAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyloadExampleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
