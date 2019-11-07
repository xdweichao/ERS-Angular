import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  currentlyLoggedIn = false;

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




  constructor(private router: Router) { }
  login(credentials: { Username: string, Password: string }) {
    const valid = this.validCredentials.some(obj => {
      return obj.Username === credentials.Username &&
        obj.Password === credentials.Password;

    });

    if (valid) {
      this.currentlyLoggedIn = true;
      this.router.navigateByUrl('/reimbursement');
    } else {
      return false;
    }

  }

}
