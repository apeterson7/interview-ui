import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../model/question';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  @Input() question: Question;

  constructor(public activeModal: NgbActiveModal) { }
  
  ngOnInit() {
  }

}
