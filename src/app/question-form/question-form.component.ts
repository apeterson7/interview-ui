import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../service/question-service.service';
import { Question } from '../model/question';
import {FileUploader} from 'ng2-file-upload';
import {FileService } from '../service/file.service';
import {HttpResponse} from '@angular/common/http';

 
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
 
  constructor(private route: ActivatedRoute, private router: Router, private questionService: QuestionService,private fileService: FileService) {
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



  uploadedQuestions: Question[];

  @ViewChild('fileInput', {static: true}) fileInput: ElementRef;
 
  uploader: FileUploader;
  isDropOver: boolean;
  uploadUrl = 'http://localhost:8080/api/upload/questions';

  selectedFiles: FileList;
	currentFile: File;

	
  selectFile(event) {
    console.log(event.target.files)
    this.selectedFiles = event.target.files;
  }
  
  upload() {
    this.currentFile = this.selectedFiles.item(0);
    // this.fileService.uploadQuestionFile(this.currentFile).subscribe(event => {
    //  if (event instanceof HttpResponse) {
    //     console.log('File is completely uploaded!');
    //   }
    // });
    this.fileService.uploadQuestionFile(this.currentFile).subscribe(
      event => {
        
      }
    );
    this.selectedFiles = undefined;
  }

  ngOnInit(): void {
    const headers = [{name: 'Accept', value: 'application/json'}];
    this.uploader = new FileUploader({url: this.uploadUrl, autoUpload: true, headers: headers});
 
    this.uploader.onCompleteAll = () => alert('File uploaded');

  }
 
  fileOverAnother(e: any): void {
    this.isDropOver = e;
  }
 
  fileClicked() {
    this.fileInput.nativeElement.click();
  }
}