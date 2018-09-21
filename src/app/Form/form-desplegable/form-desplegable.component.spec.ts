import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDesplegableComponent } from './form-desplegable.component';

describe('FormDesplegableComponent', () => {
  let component: FormDesplegableComponent;
  let fixture: ComponentFixture<FormDesplegableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDesplegableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDesplegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
