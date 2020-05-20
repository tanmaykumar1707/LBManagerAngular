import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLBComponent } from './add-new-lb.component';

describe('AddNewLBComponent', () => {
  let component: AddNewLBComponent;
  let fixture: ComponentFixture<AddNewLBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewLBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewLBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
