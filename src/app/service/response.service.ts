import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Interview } from '../model/interview';
import { Candidate } from '../model/candidate';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  private responseUrl: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.responseUrl = 'http://localhost:8080/api/responses';
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  public saveAll(responses: Response[]){
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<Response[]>(this.responseUrl, responses, {headers});
  }
}
