import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCasillasComponent } from './form-casillas.component';

describe('FormCasillasComponent', () => {
  let component: FormCasillasComponent;
  let fixture: ComponentFixture<FormCasillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCasillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCasillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
