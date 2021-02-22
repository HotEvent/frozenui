import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFrozenComponent } from './ng-frozen.component';

describe('NgFrozenComponent', () => {
  let component: NgFrozenComponent;
  let fixture: ComponentFixture<NgFrozenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFrozenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFrozenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
