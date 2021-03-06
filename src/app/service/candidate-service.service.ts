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
    this.candidateUrl = 'http://localhost:8080/api';
  }

  public findAll(): Observable<Candidate[]> {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Candidate[]>( this.candidateUrl+'/candidates', {headers});
  }

  public findAllByTag(tag: string): Observable<Candidate[]> {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Candidate[]>( this.candidateUrl+'/candidates/tag/'+tag, {headers});
  }

  public findAllByTags(tags: string[]): Observable<Candidate[]> {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    let url = this.candidateUrl+'/candidates/tags?';
    
    for(let tag of tags){ 
      url= url+'tag='+tag+'&';
    }

    console.log(url);

    return this.http.get<Candidate[]>( url, {headers});
  }
  
  public findById(id: number): Observable<Candidate> {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Candidate>( this.candidateUrl+'/candidate/'+id, {headers});
  }

  public addQuestionsByCandidateId(questions:Question[] , id:number): Observable<Question[]> {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.put<Question[]>(this.candidateUrl+'/candidate/'+id, questions, {headers});
  }

  public createInterviewForCandidateById(id:number): Observable<Candidate> {
    let username='user'
    let password='password'
  
    const interview = new Interview();

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.put<Candidate>(this.candidateUrl+'/candidate/add-interview/'+id, interview, {headers});
  }

  public save(candidate: Candidate){
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<Candidate>(this.candidateUrl+'/candidates', candidate, {headers})
  }

  // public update(candidate: Candidate){
  //   let username='user'
  //   let password='password'
  
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   return this.http.put<Candidate>(this.candidateUrl, candidate, {headers})
  // }

  public updateStatus(id:number,status:number){
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.put<Candidate>(this.candidateUrl+'/candidate/'+id+'/status/'+status, null, {headers})
  }

  public getTags(){
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<string[]>(this.candidateUrl+'/candidates/tags/all', {headers})

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


