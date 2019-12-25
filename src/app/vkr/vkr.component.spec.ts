import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VkrComponent } from './vkr.component';

describe('VkrComponent', () => {
  let component: VkrComponent;
  let fixture: ComponentFixture<VkrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VkrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
