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
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FileUploadModule
  ],
  providers: [ QuestionService],
  bootstrap: [ AppComponent ],
  entryComponents: [
    QuestionDetailComponent,
    CandidateDetailComponent
  ]
})

export class AppModule { }
