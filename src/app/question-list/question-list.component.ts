import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from '../model/question';
import { QuestionService } from '../service/question-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[];
  selectedQuestion: Question;
  dataSource = new MatTableDataSource(this.questions);
  displayedColumns: string[] = ['id', 'name', 'level', 'text'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  page = 1;
  pageSize = 5;

  constructor(private questionService: QuestionService, private modalService: NgbModal) { }

  ngOnInit() {
    this.questionService.findAll().subscribe(data =>{
      this.questions = data;
      this.dataSource = new MatTableDataSource(this.questions);
      this.dataSource.paginator = this.paginator;

      this.selectedQuestion = null;
    })
  }


  onSelect(question: Question): void {
    this.selectedQuestion = question;
  }

  open(question:Question) {
    const modalRef = this.modalService.open(QuestionDetailComponent);
    modalRef.componentInstance.question = question;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
