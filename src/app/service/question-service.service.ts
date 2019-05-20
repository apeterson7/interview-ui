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
    return this.http.get<Question[]>(this.questionsUrl);
  }

  public findById(id: Number): Observable<Question>{
    return this.http.get<Question>(this.questionsUrl+'/'+id);
  }
 

  public save(question: Question) {
    return this.http.post<Question>(this.questionsUrl, question);
  }
}
