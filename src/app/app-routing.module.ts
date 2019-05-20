import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';



const routes: Routes = [
  { path: 'questions', component: QuestionListComponent },
  { path: 'addquestions', component: QuestionFormComponent },
  { path: 'question', component: QuestionDetailComponent},
  { path: 'candidates', component: CandidateListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
