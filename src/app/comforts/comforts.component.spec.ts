import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfortsComponent } from './comforts.component';

describe('ComfortsComponent', () => {
  let component: ComfortsComponent;
  let fixture: ComponentFixture<ComfortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComfortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComfortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
