import { Component, OnInit, Input} from '@angular/core';
import { Candidate } from '../model/candidate';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Question } from '../model/question';
import { QuestionService } from '../service/question-service.service';
import { CandidateService } from '../service/candidate-service.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  @Input() candidate: Candidate;


  public page = 1;
  public pageSize = 4;
  public saved;

  public assignedQuestions: Question[];
  public availableQuestions: Question[]

  constructor(public activeModal: NgbActiveModal, 
    public questionService: QuestionService, 
    public candidateService: CandidateService) { 
    
  }

  availableToAssigned(question:Question) {
    const index: number = this.availableQuestions.indexOf(question);
    if (index !== -1) {
        this.availableQuestions.splice(index, 1);
        this.assignedQuestions.push(question);
        this.saved=false;
    }        
  }

  assignedToAvailable(question:Question){
    const index: number = this.assignedQuestions.indexOf(question);
    if (index !== -1) {
        this.assignedQuestions.splice(index, 1);
        this.availableQuestions.push(question);
        this.saved=false;
    }        
  }

  saveAssignedQuestions(questions:Question[]){
    this.saved=true;
    this.candidateService.addQuestionsByCandidateId(questions, this.candidate.candidate_id);
    // this.activeModal.close('Close click');
  }

  ngOnInit() {
    this.questionService.findAll().subscribe(data => {
      this.availableQuestions = data
    }); 
    this.assignedQuestions = this.candidate.questions;
    // console.log(this.assignedQuestions);
    this.assignedQuestions
    this.saved = false;
  }

}
