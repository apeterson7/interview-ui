import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Interview } from '../model/interview';
import { Candidate } from '../model/candidate';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  private interviewUrl: string;
  private headers: HttpHeaders;
 
  constructor(private http: HttpClient) {
    this.interviewUrl = 'http://localhost:8080/api';
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }
 
  public findAll(): Observable<Interview[]> {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Interview[]>(this.interviewUrl+'/interviews', {headers});
  }

  public findById(id: String): Observable<Interview>{
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Interview>(this.interviewUrl+'/interview/'+id, {headers});
  }

  

  // public update(interview:Interview){
  //   let username='user'
  //   let password='password'

  //   interview.candidate.interviews = null;
  
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   return this.http.put<Interview>(this.interviewUrl+'/interview',interview,{ headers });

  // }

  public updateStatus(id:string, candidateStatus:number){
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.put<Interview>(this.interviewUrl+'/interview/'+id+'/status/'+candidateStatus,null,{ headers });

  }

  // public save(interview: Interview) {
  //   let username='user'
  //   let password='password'
  
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   return this.http.post<Interview>(this.interviewUrl+'/interview', interview, {headers});
  // }

  // public saveAll(interviews: Interview[]){
  //   let username='user'
  //   let password='password'
  
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   return this.http.post<Interview[]>(this.interviewUrl+'/interviews', interviews, {headers});
  // }

}
