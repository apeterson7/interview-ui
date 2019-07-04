import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Question } from '../model/question';
import { QuestionService } from '../service/question-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';
import {MdbTableDirective} from 'angular-bootstrap-md';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  searchText: string = '';
  previous: string;


  questions: Question[];
  selectedQuestion: Question;

  page = 1;
  pageSize = 10;


  @HostListener('input') oninput() {
    this.searchItems();
  }

  constructor(private questionService: QuestionService, private modalService: NgbModal) { }

  ngOnInit() {
    this.questionService.findAll().subscribe(data =>{
      this.questions = data;
      this.selectedQuestion = null;
    })

    this.mdbTable.setDataSource(this.questions);

    console.log(this.mdbTable);
    this.questions = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }


  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.questions = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.questions = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }

  onSelect(question: Question): void {
    this.selectedQuestion = question;
  }

  open(question:Question) {
    const modalRef = this.modalService.open(QuestionDetailComponent);
    modalRef.componentInstance.question = question;
  }

}
