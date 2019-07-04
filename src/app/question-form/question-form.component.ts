import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../service/question-service.service';
import { Question } from '../model/question';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';

import {FileUploader} from 'ng2-file-upload';
import {FileService } from '../service/file.service';
import {HttpResponse} from '@angular/common/http';

 
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
 
  question: Question;

  submitted=false;
  types = ['single answer','multiple choice'];
  levels = ['junior', 'mid level', 'senior'];
 
  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private questionService: QuestionService,
      private fileService: FileService,
      private modalService: NgbModal
    ) 
    {
    this.question = new Question();
    this.question.score=-1;
    // this.question.id=1;
  }
 
  onSubmit() {
    this.questionService.save(this.question).subscribe(result => this.gotoUserList());
  }
 
  get diagnostic() { return JSON.stringify(this.question); }

  gotoUserList() {
    this.router.navigate(['/questions']);
  }

  open(question:Question) {
    const modalRef = this.modalService.open(QuestionDetailComponent);
    modalRef.componentInstance.question = question;
  }

}