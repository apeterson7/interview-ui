import { Component, OnInit } from '@angular/core';
import { Interview } from '../model/interview';
import {InterviewService} from '../service/interview.service';
import { CandidateService } from '../service/candidate-service.service';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {

  constructor(
    private interviewService: InterviewService, 
    private candidateService: CandidateService
    // private modalService: NgbModal
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
    interview.status = 'hired';
    interview.candidate.status = 'hired';

    this.interviewService.saveInterview(interview).subscribe(
      interview => console.log(interview.status)
    );;

  }

  reject(interview: Interview){
    interview.status = 'rejected';
    interview.candidate.status = 'rejected';
    
    this.interviewService.saveInterview(interview).subscribe(
        interview => console.log(interview.status)
    );
  }

  // open(interview:Interview) {
  //   const modalRef = this.modalService.open(CandidateDetailComponent, { size: 'lg' });
  //   modalRef.componentInstance.candidate = candidate;
  // }

}
