import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionService } from './service/question-service.service';
import { QuestionFormComponent } from './question-form/question-form.component';
import { FormsModule } from '@angular/forms';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import {FileUploadModule} from 'ng2-file-upload';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { InterviewDetailComponent } from './interview-detail/interview-detail.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartInterviewComponent } from './start-interview/start-interview.component';
import { CandidateStatusPipe } from './pipes/candidate-status.pipe';
import { InterviewStatusPipe } from './pipes/interview-status.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionDetailComponent,
    CandidateListComponent,
    CandidateDetailComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    FileuploadComponent,
    CandidateFormComponent,
    InterviewListComponent,
    InterviewDetailComponent,
    UpdateCandidateComponent,
    StartInterviewComponent,
    CandidateStatusPipe,
    InterviewStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FileUploadModule,
    NgxFileDropModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [ QuestionService],
  bootstrap: [ AppComponent ],
  entryComponents: [
    QuestionDetailComponent,
    CandidateDetailComponent
  ]
})

export class AppModule { }
