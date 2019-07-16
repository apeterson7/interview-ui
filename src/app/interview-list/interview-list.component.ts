import { Component, OnInit } from '@angular/core';
import { Interview } from '../model/interview';
import {InterviewService} from '../service/interview.service';
import { CandidateService } from '../service/candidate-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {

  constructor(
    private interviewService: InterviewService, 
    private candidateService: CandidateService,
    // private modalService: NgbModal
    private router: Router
    ) { }

  page = 1;
  pageSize = 5;

  interviews: Interview[];
  selectedCandidate: Interview;

  ngOnInit() {
    this.interviewService.findAll().subscribe(data =>{
      this.interviews = data;
      console.log(this.interviews);

    })
  }

  onSelect(interview: Interview): void {
    this.selectedCandidate = interview;
  }

  hire(interview: Interview){
    // //hired
    // this.candidateService.updateStatus(interview.candidate.candidate_id,3).subscribe(
    //   candidate => {
    //     console.log(candidate)
        
        
    //   }
    // );
  // finalized
    this.interviewService.updateStatus(interview.interview_id,3).subscribe(
      interview => {
        console.log(interview)
        this.router.navigate(['candidates'])
      }
    );;

    // interview.status = 3;
    // interview.candidate.status = 3;
    // //rejected
    // this.interviewService.update(interview).subscribe(
    //   candidate => {
    //     console.log(candidate)
    //   }
    // );  
  }

  reject(interview: Interview){
    // //rejected
    // this.candidateService.updateStatus(interview.candidate.candidate_id,4).subscribe(
    //   candidate => {
    //     console.log(candidate)
    //   }
    // );  
     //finalized
     this.interviewService.updateStatus(interview.interview_id,4).subscribe(
      interview => {
        console.log(interview)
        this.router.navigate(['candidates'])
      }
    ); 

      // interview.status = 3;
      // interview.candidate.status = 4;
      // //rejected
      // this.interviewService.update(interview).subscribe(
      //   candidate => {
      //     console.log(candidate)
      //   }
      // );  
  }

  release(interview: Interview){
    // //available
    // this.candidateService.updateStatus(interview.candidate.candidate_id,1).subscribe(
    //   candidate => {
    //     console.log(candidate)
    //   }
    // ); 
     //finalized
     this.interviewService.updateStatus(interview.interview_id,1).subscribe(
      interview => {
        console.log(interview)
        this.router.navigate(['candidates'])
      }
    );

    // interview.status = 3;
    // interview.candidate.status = 1;
    // //rejected
    // this.interviewService.update(interview).subscribe(
    //   candidate => {
    //     console.log(candidate)
    //   }
    // );  
  }

}
