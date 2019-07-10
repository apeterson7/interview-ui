import { Injectable } from '@angular/core';
import { Candidate } from '../model/candidate';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Question } from '../model/question';
import { catchError, map, tap } from 'rxjs/operators';
import { Interview } from '../model/interview';

@Injectable({
  providedIn: 'root'
})
export class CandidateService{

  private candidateUrl: string;

  constructor(private http: HttpClient) {
    this.candidateUrl = 'http://localhost:8080/api/candidates';
  }

  public findAll(): Observable<Candidate[]> {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Candidate[]>( this.candidateUrl, {headers});
  }
  
  public findById(id: number): Observable<Candidate> {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Candidate>( this.candidateUrl+'/'+id, {headers});
  }

  public addQuestionsByCandidateId(questions:Question[] , id:number): Observable<Question[]> {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.put<Question[]>(this.candidateUrl+'/'+id, questions, {headers});
  }

  public createInterviewForCandidateById(id:number): Observable<Candidate> {
    let username='user'
    let password='password'
  
    const interview = new Interview();
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.put<Candidate>(this.candidateUrl+'/add-interview/'+id, interview, {headers});
  }

  public save(candidate: Candidate){
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<Candidate>(this.candidateUrl, candidate, {headers})
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  
  //     // TODO: better job of transforming error for user consumption
  //     // this.log(`${operation} failed: ${error.message}`);
  
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}


