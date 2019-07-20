import { Component, OnInit, Input} from '@angular/core';
import { Candidate } from '../model/candidate';
import { Question } from '../model/question';
import { QuestionService } from '../service/question-service.service';
import { CandidateService } from '../service/candidate-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


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
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;


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

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.candidate.tags.push(value.toLowerCase());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    const index = this.candidate.tags.indexOf(tag);

    if (index >= 0) {
      this.candidate.tags.splice(index, 1);
    }
  }

  save(){
    // this.candidateService.update(this.candidate).subscribe(result => this.goToCandidate(result.candidate_id));

    
    this.candidateService.save(this.candidate).subscribe(data =>
      {
        console.log(data);
        this.router.navigate(['/candidates']);
      });
 
  }

  goToCandidate(id:number) {
    this.router.navigate(['/candidates']);
  }

}
