import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './questions/answers/answers.component';
import { QuestionsModule } from './questions/questions.module';
import { AuthGaurd } from './auth/auth.gaurd';


const routes: Routes = [
  {
    path: 'questions',
    loadChildren: './questions/questions.module#QuestionsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurd]
})
export class AppRoutingModule { }
