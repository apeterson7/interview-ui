import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../service/candidate-service.service';
import { Candidate } from '../model/candidate';
import { CandidateDetailComponent} from '../candidate-detail/candidate-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InterviewService } from '../service/interview.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-candidates-for-tag',
  templateUrl: './candidates-for-tag.component.html',
  styleUrls: ['./candidates-for-tag.component.css']
})
export class CandidatesForTagComponent implements OnInit {
  constructor(
    private candidateService: CandidateService, 
    private modalService: NgbModal,
    private interviewService: InterviewService,
    private router: Router,
    private route: ActivatedRoute
    ) 
  { }

  page = 1;
  pageSize = 5;

  candidates: Candidate[];
  selectedCandidate: Candidate;

  ngOnInit() {
    console.log("CANDIDATE TAG")
    let tag = this.route.snapshot.paramMap.get('id');

    this.candidateService.findAllByTag(tag).subscribe(data =>{
      this.candidates = data;
      console.log(this.candidates);

    })
  }

  sendInterview(id:number){
    console.log(id);
    this.candidateService.createInterviewForCandidateById(id).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['interviews'])
      }
    );
  }

  findCandidatesByTag(tag:string){
    this.candidateService.findAllByTag(tag).subscribe(data =>{
      this.candidates = data;
      console.log(this.candidates);

    })
  }
}
