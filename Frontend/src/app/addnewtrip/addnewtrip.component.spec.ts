import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewtripComponent } from './addnewtrip.component';

describe('AddnewtripComponent', () => {
  let component: AddnewtripComponent;
  let fixture: ComponentFixture<AddnewtripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewtripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
