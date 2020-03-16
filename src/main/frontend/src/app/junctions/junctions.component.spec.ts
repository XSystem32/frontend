import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunctionsComponent } from './junctions.component';

describe('FormularComponent', () => {
  let component: JunctionsComponent;
  let fixture: ComponentFixture<JunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
