import { Component, OnInit, Input} from '@angular/core';
import { Candidate } from '../model/candidate';
import { Question } from '../model/question';
import { QuestionService } from '../service/question-service.service';
import { CandidateService } from '../service/candidate-service.service';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  public candidate: Candidate;

  public page = 1;
  public pageSize = 4;
  
  public saved;
  public edits;

  assignedQuestions: Question[];
  availableQuestions: Question[];

  constructor(private route: ActivatedRoute,
    public questionService: QuestionService, 
    public candidateService: CandidateService) { 
    
  }

  availableToAssigned(question:Question) {
    const index: number = this.availableQuestions.indexOf(question);
    if (index !== -1) {
        this.availableQuestions.splice(index, 1);
        this.assignedQuestions.push(question);
        this.saved=false;
        this.edits=true;
    }        
  }

  assignedToAvailable(question:Question){
    const index: number = this.assignedQuestions.indexOf(question);
    if (index !== -1) {
        this.assignedQuestions.splice(index, 1);
        this.availableQuestions.push(question);
        this.saved=false;
        this.edits=true;
    }        
  }

  saveAssignedQuestions(questions:Question[]){
    this.saved=true;
    this.edits=false;
    // console.log(questions, this.candidate.candidate_id);
    this.candidateService.addQuestionsByCandidateId(questions, this.candidate.candidate_id).subscribe(
      data => {
        console.log(data);
        this.candidate.questions = data;
      }
    );
  }

  close(){
    
  }

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
      this.assignedQuestions = [];
      
      for (let question of this.candidate.questions){
        this.assignedQuestions.push(question);
      }

    })

    /*
     * This is asynchronous!
     */
    this.questionService.findAll().subscribe(data => {
      this.availableQuestions = data
    }); 

    this.saved = false;
  }


  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];

  drop(event: CdkDragDrop<Question[]>) {

    console.log(event.previousContainer);
    console.log(event.container);

    if (event.previousContainer === event.container) {
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      
      if(!this.edits){
        this.edits=true;
        this.saved=false;
      }
    }
  }





}
