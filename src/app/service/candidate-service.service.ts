import { Injectable } from '@angular/core';
import { Candidate } from '../model/candidate';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
}
