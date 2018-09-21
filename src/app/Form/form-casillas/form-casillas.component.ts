import { Component, ViewChild } from '@angular/core';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ModalDirective } from 'ngx-bootstrap';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-casillas',
  templateUrl: './form-casillas.component.html',
  styleUrls: ['./form-casillas.component.scss']
})
export class FormCasillasComponent {
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
  questionOption: FormGroup;
  question: string;
  optionsQ: Object;

  constructor(private whatIsLove: FormBuilder) {
    this.showPen = true;
    this.buttonEdit = false;
    this.title = 'Escriba su titulo aqui';
    this.optionsQ = {};
    this.questionOption = this.whatIsLove.group({
      question: [''],
      questionsOptions: this.whatIsLove.array([this.initOptions()])
    });
  }

  initOptions() {
    return this.whatIsLove.group({
      checkbox: [false],
      checkboxText: ['']
    });
  }

  addOption() {
    const control = <FormArray>this.questionOption.controls['questionsOptions'];
    control.push(this.initOptions());
  }

  deleteOption(index: number) {
    const control = <FormArray>this.questionOption.controls['questionsOptions'];
    control.removeAt(index);
  }

  handler() {}

  recivingTheForm(Form) {
    this.optionsQ = Form.value.questionsOptions;
    this.question = Form.value.question;
  }

  showModal() {
    this.modal.show();
  }

  showButton() {
    this.buttonEdit = true;
  }

  changeTitle() {
    this.title = this.newTitle;
    this.descripcion = this.descripcion;
    this.modal.hide();
  }

  hideButton() {
    this.buttonEdit = false;
  }
}
