import { Component, OnInit, Input} from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import {FileService } from '../service/file.service';


@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.css']
})
export class ResumeUploadComponent implements OnInit {

  isError: Boolean;
  isSuccess: Boolean;
  isLoading: Boolean;
  errorMsg: String;
  fileService:FileService;

  @Input() candidate_id:string;


  constructor(fileService:FileService) { 
    this.fileService = fileService;
  }

  ngOnInit() {
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
          this.fileService.uploadResumeFile(file, this.candidate_id).subscribe(
            res => {
              console.log(res);
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
}
