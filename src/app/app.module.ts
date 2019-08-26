import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionService } from './service/question-service.service';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidateDetailComponent, CandidateSaveAlertComponent } from './candidate-detail/candidate-detail.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { FileUploadModule} from 'ng2-file-upload';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { InterviewDetailComponent } from './interview-detail/interview-detail.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { StartInterviewComponent } from './start-interview/start-interview.component';
import { CandidateStatusPipe } from './pipes/candidate-status.pipe';
import { InterviewStatusPipe } from './pipes/interview-status.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {ActivatedRoute} from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule} from '@angular/material/slider';
import { AvgResponseScorePipe } from './pipes/avg-response-score.pipe';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


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
    InterviewStatusPipe,
    CandidateSaveAlertComponent,
    AvgResponseScorePipe
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
    DragDropModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSliderModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [ QuestionService],
  bootstrap: [ AppComponent ],
  entryComponents: [
    QuestionDetailComponent,
    CandidateDetailComponent
  ]
})

export class AppModule { }
