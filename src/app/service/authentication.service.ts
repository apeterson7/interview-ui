import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {
    console.log('authenticating')
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>('http://localhost:8080/validateLogin',{headers}).pipe(
     map(
       userData => {
         console.log(userData)
        sessionStorage.setItem('username',username);
        return userData;
       }
     )
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    // console.log(!(user === null))
    return !(user === null)
  }

  getUser(){
    return sessionStorage.getItem('username')
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
