import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output()
  Initiat: EventEmitter<object> = new EventEmitter();
  faPen = faPen;
  faPlus = faPlus;
  descripcion: string;

  // Form
  @Input()
  questionText: FormGroup;
  questions: object;

  constructor(private pollollon: FormBuilder) {
    this.questions = {};
    this.questionText = this.pollollon.group({
      questionsTexts: this.pollollon.array([this.initQuestions()])
    });
  }

  initQuestions() {
    return this.pollollon.group({
      question: [''],
      answer: ['']
    });
  }

  handler() {}

  addQuestion() {
    const control = <FormArray>this.questionText.controls['questionsTexts'];
    control.push(this.initQuestions());
  }

  deleteQuestion(index: number) {
    const control = <FormArray>this.questionText.controls['questionsTexts'];
    control.removeAt(index);
  }

  submitForm(allQuestions) {
    this.questions = allQuestions.form.controls.questionsTexts.value;
    console.log(this.questions);
  }

  ngOnInit() {}
}
