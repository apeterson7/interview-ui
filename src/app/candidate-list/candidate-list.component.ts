import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../service/candidate-service.service';
import { Candidate } from '../model/candidate';
import { CandidateDetailComponent} from '../candidate-detail/candidate-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InterviewService } from '../service/interview.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {


  constructor(
    private candidateService: CandidateService, 
    private modalService: NgbModal,
    private interviewService: InterviewService,
    private router: Router
    ) 
  { }

  page = 1;
  pageSize = 5;

  candidates: Candidate[];
  selectedCandidate: Candidate;

  ngOnInit() {
    this.candidateService.findAll().subscribe(data =>{
      this.candidates = data;
      console.log(this.candidates);

    })
  }

  select(candidate: Candidate): void {
    this.selectedCandidate = candidate;
  }

  // open(candidate:Candidate) {
  //   const modalRef = this.modalService.open(CandidateDetailComponent, { size: 'lg' });
  //   modalRef.componentInstance.candidate = candidate;
  // }

  sendInterview(id:number){
    console.log(id);
    this.candidateService.createInterviewForCandidateById(id).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['interviews'])
      }
    );
  }
}
