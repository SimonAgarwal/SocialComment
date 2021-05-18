import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentAppComponent } from './percent-app.component';

describe('PercentAppComponent', () => {
  let component: PercentAppComponent;
  let fixture: ComponentFixture<PercentAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
