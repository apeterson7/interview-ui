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


@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionDetailComponent,
    CandidateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
