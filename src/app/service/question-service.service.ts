import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Question } from '../model/question';
import { headersToString } from 'selenium-webdriver/http';

@Injectable(
  {  providedIn: 'root'}
  )
export class QuestionService {

  private questionsUrl: string;
  private headers: HttpHeaders;
 
  constructor(private http: HttpClient) {
    this.questionsUrl = 'http://localhost:8080/api/questions';
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }
 
  public findAll(): Observable<Question[]> {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Question[]>(this.questionsUrl, {headers});
  }

  public findById(id: Number): Observable<Question>{
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Question>(this.questionsUrl+'/'+id, {headers});
  }
 

  public save(question: Question) {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<Question>(this.questionsUrl, question, {headers});
  }
}
