import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {FileService } from '../service/file.service';
import {HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
 
  uploader: FileUploader;
  isDropOver: boolean;
  uploadUrl = 'http://localhost:8080/api/upload/questions';

  selectedFiles: FileList;
	currentFile: File;

  constructor(private fileService: FileService) {}
	
  selectFile(event) {
    console.log(event.target.files)
    this.selectedFiles = event.target.files;
  }
  
  upload() {
    this.currentFile = this.selectedFiles.item(0);
    this.fileService.uploadQuestionFile(this.currentFile).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }

  ngOnInit(): void {
    const headers = [{name: 'Accept', value: 'application/json'}];
    this.uploader = new FileUploader({url: this.uploadUrl, autoUpload: true, headers: headers});
 
    this.uploader.onCompleteAll = () => alert('File uploaded');
    this.uploader.onCompleteAll = () => alert('File uploaded');

  }
 
  fileOverAnother(e: any): void {
    this.isDropOver = e;
  }
 
  fileClicked() {
    this.fileInput.nativeElement.click();
  }

}
