import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ISAMComponent } from './isam.component';

describe('AdministrationenComponent', () => {
  let component: ISAMComponent;
  let fixture: ComponentFixture<ISAMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ISAMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ISAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
