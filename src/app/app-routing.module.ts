import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputerQComponent } from './computer-q/computer-q.component';
import { PersonQComponent } from './person-q/person-q.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
  {
    path: "",
    component: ComputerQComponent
  },
  {
    path: "second",
    component: PersonQComponent
  },
  {
    path: "answer",
    component: AnswerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
