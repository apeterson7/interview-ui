import { Component, OnInit } from '@angular/core';
import { InterviewService } from '../service/interview.service';
import { Interview } from '../model/interview';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ResponseService } from '../service/response.service';

@Component({
  selector: 'app-start-interview',
  templateUrl: './start-interview.component.html',
  styleUrls: ['./start-interview.component.css']
})
export class StartInterviewComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private interviewService: InterviewService, 
    // private responseService: ResponseService
  ) { }

  interview: Interview;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
     console.log(1);
    /*
     * This is asynchronous!
     */
    this.interviewService.findById(id).subscribe(data =>
    {
      this.interview = data;
      console.log(2);

    })
  }

  submit(){

    //change interview state to 2 - Pending Review
    // this.interviewService.updateStatus(this.interview.interview_id, 2).subscribe(
    //   result => {
    //     console.log(result)
    //     this.responseService.saveAll(this.interview.responses).subscribe(
    //       result => console.log(result)
    //     );  
    //   }
    // );

     
  }
}
