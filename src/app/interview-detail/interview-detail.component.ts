import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../service/interview.service';
import { CandidateService } from '../service/candidate-service.service';
import { Interview } from '../model/interview';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-interview-detail',
  templateUrl: './interview-detail.component.html',
  styleUrls: ['./interview-detail.component.css']
})
export class InterviewDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private interviewService: InterviewService, 
    private candidateService: CandidateService,
  ) { }

  interview: Interview;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    /*
     * This is asynchronous!
     */
    this.interviewService.findById(id).subscribe(data =>
    {
      this.interview = data;

    })
  }
  


}
