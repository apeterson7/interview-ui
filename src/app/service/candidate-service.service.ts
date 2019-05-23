import { Injectable } from '@angular/core';
import { Candidate } from '../model/candidate';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Question } from '../model/question';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidateService{

  private candidateUrl: string;

  constructor(private http: HttpClient) {
    this.candidateUrl = 'http://localhost:8080/api/candidates';

  }
  public findAll(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>( this.candidateUrl);
  }
  
  public findById(id: number): Observable<Candidate> {
    return this.http.get<Candidate>( this.candidateUrl+'/'+id);
  }

  public addQuestionsByCandidateId(questions:Question[] , id:number): Observable<Question[]> {
    console.debug("here")
    return this.http.put<Question[]>(this.candidateUrl+'/'+id, questions);
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


