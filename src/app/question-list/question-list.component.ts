import { Component, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { QuestionService } from '../service/question-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[];
  selectedQuestion: Question;

  page = 1;
  pageSize = 3;

  constructor(private questionService: QuestionService, private modalService: NgbModal) { }

  ngOnInit() {
    this.questionService.findAll().subscribe(data =>{
      this.questions = data;
      this.selectedQuestion = null;
    })
  }


  onSelect(question: Question): void {
    this.selectedQuestion = question;
  }

  open(question:Question) {
    const modalRef = this.modalService.open(QuestionDetailComponent, { size: 'lg' });
    modalRef.componentInstance.question = question;
  }

}
