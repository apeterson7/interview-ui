import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../service/question-service.service';
import { Question } from '../model/question';

 
@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
 
  question: Question;

  submitted=false;
  types = ['single answer','multiple choice'];
  levels = ['junior', 'mid level', 'senior'];
 
  constructor(private route: ActivatedRoute, private router: Router, private questionService: QuestionService) {
    this.question = new Question();
    this.question.score=-1;
    // this.question.id=1;
  }
 
  onSubmit() {
    this.questionService.save(this.question).subscribe(result => this.gotoUserList());
  }
 
  get diagnostic() { return JSON.stringify(this.question); }

  gotoUserList() {
    this.router.navigate(['/questions']);
  }
}