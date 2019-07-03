import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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

   uploadQuestionFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
    formdata.append('file', file);
    
    console.log(file.size);
    
    let username='user'
    let password='password'
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    const req = new HttpRequest('POST', 'http://localhost:8080/api/upload/questions', 
      formdata, 
      {headers} 
    );
    
    return this.http.request(req);
    
   }
}
