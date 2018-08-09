import {Component, Input, OnInit} from '@angular/core';
import {QuestionControlService} from './question-control.service';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from './question-base';
import {QuestionService} from './question.service';

@Component({
  selector: 'app-dynamically-form',
  templateUrl: './dynamically-form.component.html',
  styleUrls: ['./dynamically-form.component.css'],
  providers: [QuestionControlService, QuestionService]
})
export class DynamicallyFormComponent implements OnInit {

  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private service: QuestionService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
