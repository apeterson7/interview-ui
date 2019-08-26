import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { InterviewDetailComponent } from './interview-detail/interview-detail.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { StartInterviewComponent } from './start-interview/start-interview.component';

const routes: Routes = [
  // { path: '', component: HomeComponent,canActivate:[AuthGuardService]},
  { path: '', component: QuestionListComponent,canActivate:[AuthGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'questions', component: QuestionListComponent, canActivate:[AuthGuardService]},
  { path: 'addquestions', component: QuestionFormComponent, canActivate:[AuthGuardService]},
  { path: 'question', component: QuestionDetailComponent, canActivate:[AuthGuardService]},
  { path: 'candidates', component: CandidateListComponent, canActivate:[AuthGuardService]},
  { path: 'candidate/:id', component: CandidateDetailComponent, canActivate:[AuthGuardService] },
  { path: 'edit-candidate/:id', component: UpdateCandidateComponent, canActivate:[AuthGuardService] },
  { path: 'addcandidate', component: CandidateFormComponent, canActivate:[AuthGuardService]},
  { path: 'interviews', component: InterviewListComponent, canActivate:[AuthGuardService]},
  { path: 'interview/:id', component: InterviewDetailComponent, canActivate:[AuthGuardService] },
  { path: 'start-interview/:id', component: StartInterviewComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
