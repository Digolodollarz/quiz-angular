import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateQuizComponent } from './quiz/create-quiz/create-quiz.component';


@NgModule({
  declarations: [CreateQuizComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
