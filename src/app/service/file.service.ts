import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {}

  uploadCandidateFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', 'http://localhost:8080/api/upload/candidates', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
    return this.http.request(req);
    
   }

   uploadResumeFile(file: File, candidate_id: string): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', 'http://localhost:8080/api/resume/uploadResume/'+candidate_id, formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
    return this.http.request(req);
    
   }

   uploadQuestionFile(file: File): Observable<Question[]> {
		const formdata: FormData = new FormData();
    formdata.append('file', file);
    
    console.log(file.size);
    
    let username='user'
    let password='password'
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Question[]>('http://localhost:8080/api/upload/questions', formdata, {headers});

   }
   
}
