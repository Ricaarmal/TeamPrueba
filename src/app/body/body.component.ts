import { Component, ViewChild, AfterViewInit, Output } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FormComponent } from '../Form/form/form.component';
import { HeaderComponent } from '../header/header/header.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements AfterViewInit {
  // Modal
  @ViewChild(ModalDirective)
  modal: ModalDirective;
  faPen: any;
  description: string;

  // Components
  @ViewChild(FormComponent)
  textComponent: FormComponent;
  @Output()
  @ViewChild(HeaderComponent)
  headComponent: HeaderComponent;

  // Change Title
  title: string;
  newTitle: string;
  buttonEdit: boolean;

  constructor() {
    this.faPen = faPen;
    this.buttonEdit = false;
    this.title = 'Escriba su Titulo Aqui';
  }

  ngAfterViewInit() {
    console.log(this.textComponent);
  }

  addQuestionDot() {
    this.textComponent.addQuestion();
  }

  changeTitle() {
    this.title = this.newTitle;
    this.description = this.description;
    this.modal.hide();
  }

  handler() {}

  showModal() {
    this.modal.show();
  }

  showButton() {
    this.buttonEdit = true;
  }

  hideButton() {
    this.buttonEdit = false;
  }
}
