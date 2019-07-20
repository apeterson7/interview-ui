import { Component, OnInit, OnDestroy } from '@angular/core';
import { InterviewService } from '../service/interview.service';
import { CandidateService } from '../service/candidate-service.service';
import { Interview } from '../model/interview';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AvgResponseScorePipe } from '../pipes/avg-response-score.pipe';
import { ResponseService } from '../service/response.service';

@Component({
  selector: 'app-interview-detail',
  templateUrl: './interview-detail.component.html',
  styleUrls: ['./interview-detail.component.css']
})
export class InterviewDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private interviewService: InterviewService, 
    // private candidateService: CandidateService,
    private responseService: ResponseService
  ) { }

  interview: Interview;
  responses: Response[];

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    /*
     * This is asynchronous!
     */
    this.interviewService.findById(id).subscribe(data =>
    {
      this.interview = data;
      this.responses = this.interview.responses;
    })
  }
  

  ngOnDestroy(){

    this.responseService.saveAll(this.interview.responses).subscribe(
      data => console.log("Responses Saved")
    );
  }

}
