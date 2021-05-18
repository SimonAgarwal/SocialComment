import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLeftComponent } from './second-left.component';

describe('SecondLeftComponent', () => {
  let component: SecondLeftComponent;
  let fixture: ComponentFixture<SecondLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
