import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputUsername = '';
  inputPassword = '';

  invalidInput = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  submit() {
    const credentials = {
      Username: this.inputUsername,
      Password: this.inputPassword
    };
    if (!this.loginService.login(credentials)) {
      this.invalidInput = true;

    }
  }

}
