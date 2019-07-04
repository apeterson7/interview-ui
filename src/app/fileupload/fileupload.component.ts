import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {FileService } from '../service/file.service';
import { Question } from '../model/question';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { QuestionService } from '../service/question-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  uploadedQuestions: Question[];
  isError: Boolean;
  isSuccess: Boolean;
  isLoading: Boolean;
  errorMsg: String;
  
  constructor(
      private fileService: FileService, 
      private questionService: QuestionService,
      private modalService: NgbModal
    ){  }

  ngOnInit(): void {
    this.uploadedQuestions = null;
    this.isError = false;
    this.isSuccess = false;
    this.isLoading = false;
  }

  public files: NgxFileDropEntry[] = [];
 
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          // this.isLoading = true;

          this.isLoading = true;
          this.fileService.uploadQuestionFile(file).subscribe(
            res => {
              console.log(res);
              this.uploadedQuestions = res;
              this.isError = false;
              this.isSuccess = false;
              this.isLoading = false;
            },
            err => {
              console.log(err);
              // JSON.stringify(err.json())
              this.errorMsg = err.error;

              this.isError = true;
              this.isSuccess = false;
              this.uploadedQuestions = null;
              this.isLoading = false;

            }
          );
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }  

  public saveQuestions(){
    this.questionService.saveAll(this.uploadedQuestions).subscribe(
      res => { 
        console.log(res)
        this.isError = false;
        this.isSuccess = true;
      },
      err => { console.log(err) 
        this.isSuccess = false;
      }
    );
  }

  open(question:Question) {
    const modalRef = this.modalService.open(QuestionDetailComponent);
    modalRef.componentInstance.question = question;
  }

}
