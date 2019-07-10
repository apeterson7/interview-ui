import { Component, OnInit, Input} from '@angular/core';
import { Candidate } from '../model/candidate';
import { Question } from '../model/question';
import { QuestionService } from '../service/question-service.service';
import { CandidateService } from '../service/candidate-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    public candidateService: CandidateService) { 
  }

  public candidate:Candidate;
  // private saved:Boolean;

  ngOnInit() {
    // this.candidate = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.candidateService.findById(+params.get('id')))
    // );
    let id = this.route.snapshot.paramMap.get('id');
    /*
     * This is asynchronous!
     */
    this.candidateService.findById(+id).subscribe(data =>
    {
      this.candidate = data;
      console.log(this.candidate)
    })

    // this.candidate.
   
    // this.saved = false;
  }

  save(){
    this.candidateService.save(this.candidate).subscribe(data =>
      {
        console.log(data);
      });
    this.router.navigate(['/candidates']);
  }

}
