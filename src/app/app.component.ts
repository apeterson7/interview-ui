import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Interview';
  user;
  greeting = {};
  
  constructor(private loginService:AuthenticationService, private http: HttpClient)  {
    this.user = loginService.getUser();
    // let username='admin'
    // let password='admin123'
  
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    // http.get('http://localhost:8080/resource').subscribe(data => this.greeting = data);

  }

}
