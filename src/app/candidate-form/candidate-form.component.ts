import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService} from '../service/candidate-service.service';
import { Candidate } from '../model/candidate';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent {

  candidate: Candidate;

  submitted=false;
  types = ['single answer','multiple choice'];
  levels = ['junior', 'mid level', 'senior'];
 
  constructor(private route: ActivatedRoute, private router: Router, private candidateService: CandidateService) {
    this.candidate = new Candidate();
    // this.question.score=-1;
    // this.question.id=1;
  }
 
  onSubmit() {
    this.candidateService.save(this.candidate).subscribe(result => this.gotoUserList());
  }
 
  get diagnostic() { return JSON.stringify(this.candidate); }

  gotoUserList() {
    this.router.navigate(['/questions']);
  }

  
}
