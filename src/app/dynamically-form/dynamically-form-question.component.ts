import {Component, Input, OnInit} from '@angular/core';
import {QuestionBase} from './question-base';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './dynamically-form-question.component.html',
  styleUrls: ['./dynamically-form-question.component.css']
})
export class DynamicallyFormQuestionComponent {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
