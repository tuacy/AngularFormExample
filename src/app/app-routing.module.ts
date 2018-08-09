import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DynamicallyFormComponent} from './dynamically-form/dynamically-form.component';
import {DynamicallyFormQuestionComponent} from './dynamically-form/dynamically-form-question.component';

const appRoutes: Routes = [
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: 'dynamically-form',
    component: DynamicallyFormComponent
  },
  {
    path: '',
    redirectTo: '/template-driven-form',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    DynamicallyFormComponent,
    DynamicallyFormQuestionComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
