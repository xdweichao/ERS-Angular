import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './Models/User';
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  currentlyLoggedIn = false;
  url: string = "http://localhost:8080/ers/login";
  
/*
  private validCredentials = [{
    Username: 'RegEmpA',
    Password: 'password'
  },
  {
    Username: 'FinManA',
    Password: 'password'
  },
  {
    Username: 'FinManB',
    Password: 'password'

  }]
*/

  constructor(private router: Router, private http: HttpClient) { }

//  login(credentials: { username: string, password: string }) {
  //  const valid = this.validCredentials.some(obj => {
    //  return obj.Username === credentials.Username &&
     //   obj.Password === credentials.Password;

    //});
   login(username: string, password: string) {
    
    const user = this.http.post<User>(this.url, {username, password});
  
    if (user) {
      this.currentlyLoggedIn = true;
      this.router.navigateByUrl('/reimbursement');
    } else {
      return false;
    }

  }

}
