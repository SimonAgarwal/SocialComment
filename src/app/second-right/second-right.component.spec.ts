import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRightComponent } from './second-right.component';

describe('SecondRightComponent', () => {
  let component: SecondRightComponent;
  let fixture: ComponentFixture<SecondRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
