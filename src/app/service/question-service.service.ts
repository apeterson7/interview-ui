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
    this.questionsUrl = 'http://localhost:8080/api';
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }
 
  public findAll(): Observable<Question[]> {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Question[]>(this.questionsUrl+'/questions', {headers});
  }

  public findById(id: Number): Observable<Question>{
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Question>(this.questionsUrl+'/question/'+id, {headers});
  }
 

  public save(question: Question) {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<Question>(this.questionsUrl+'/question', question, {headers});
  }

  public saveAll(questions: Question[]){
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<Question[]>(this.questionsUrl+'/questions', questions, {headers});
  }
}
