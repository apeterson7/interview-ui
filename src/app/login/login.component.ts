import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    model: any = {};

    username;
    password;
    invalidLogin = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginservice: AuthenticationService,
        private http: HttpClient
    ) { }

    ngOnInit() {
        // sessionStorage.setItem('token', '');
    }

    checkLogin(){
        this.loginservice.authenticate(this.username, this.password)
        .subscribe(data =>{
            console.log(data);
            if (data != null) {
                this.router.navigate([''])
                this.invalidLogin = false
            } else
                this.invalidLogin = true
          }
         );
        
    }
    

    // login() {
    //     let url = 'http://localhost:8080/login';
    //     this.http.post<Observable<boolean>>(url, {
    //         userName: this.model.username,
    //         password: this.model.password
    //     }).subscribe(isValid => {
    //         if (isValid) {
    //             sessionStorage.setItem('token', btoa(this.model.username + ':' + this.model.password));
    //             this.router.navigate(['']);
    //         } else {
    //             alert("Authentication failed.")
    //         }
    //     });
    // }
}
