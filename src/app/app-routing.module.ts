import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';



const routes: Routes = [
  { path: 'questions', component: QuestionListComponent },
  { path: 'addquestions', component: QuestionFormComponent },
  { path: 'question', component: QuestionDetailComponent},
  { path: 'candidates', component: CandidateListComponent},
  { path: 'candidate/:id', component: CandidateDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
