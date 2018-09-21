import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-desplegable',
  templateUrl: './form-desplegable.component.html',
  styleUrls: ['./form-desplegable.component.scss']
})
export class FormDesplegableComponent {
  showPen: boolean;
  @ViewChild(ModalDirective)
  modal: ModalDirective;
  faPen = faPen;
  faPlus = faPlus;
  descripcion: string;

  // Change Title
  newTitle: string;
  title: string;
  buttonEdit: boolean;

  // Form
  desplegableOpt: FormGroup;
  options: Array<object>;

  constructor(private LastButNotLeast: FormBuilder) {
    this.showPen = true;
    this.buttonEdit = false;
    this.title = 'Escriba su titulo aqui';
    this.options = [{ name: 'Example' }];
    this.desplegableOpt = this.LastButNotLeast.group({
      question: [''],
      optControl: [this.options[0]]
    });
  }

  addNewOption(name: string) {
    this.options = [
      {
        id: 1,
        name: name
      },
      {
        id: 2,
        name
      }
    ];
    this.desplegableOpt.controls['optControl'].patchValue({
      id: 2,
      name
    });
  }

  showModal() {
    this.modal.show();
  }

  showButton() {
    this.buttonEdit = true;
  }

  recivingTheForm(Form) {
    console.log(Form);
  }

  changeTitle() {
    this.title = this.newTitle;
    this.descripcion = this.descripcion;
    this.modal.hide();
  }

  hideButton() {
    this.buttonEdit = false;
  }

  handler() {}
}
