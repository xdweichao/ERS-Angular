import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpenseRecord } from './Models/ExpenseRecord';
import { Observable, Subject } from 'rxjs';
import { User } from './Models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErsService {

  private baseUrl = "http://localhost:8080/ers/";
  user: User;
  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    const credentials = {
      username: username,
      password: password
    };
    console.log('ersService->login');
    const url = this.baseUrl + 'login';
    console.log('username: ' + username + ', password: ' + password);
    let user = this.http.post<User>(url, credentials);
    console.log('user: ', user);
    var b = JSON.parse(JSON.stringify(user));
    console.log('b: ', b);
    if (user) {
      this.router.navigateByUrl('/reimbursement');
    } else {
      return false;
    }
  }


  getAll(): Observable<ExpenseRecord[]> {
    const url = this.baseUrl + 'tickets';
    const userId = 600; //this.user.userid;
    console.log('UserId: ' + userId);
    return this.http.post<ExpenseRecord[]>(url, { userId });
  }

  create(newRequest: ExpenseRecord) {
    const url = this.baseUrl +  'ticket/create';
    this.http.post<ExpenseRecord>(url, newRequest).subscribe((data: ExpenseRecord) => {
     console.log('Stored ticket:' + JSON.stringify(data));
   });

  }
}
