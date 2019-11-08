import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { ErsService } from 'src/app/ers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputUsername = '';
  inputPassword = '';

  invalidInput = false;

  constructor(private ersService: ErsService) { }

  ngOnInit() {
  }
  submit() {
   /* const credentials = {
      Username: this.inputUsername,
      Password: this.inputPassword
    };*/
    if (!this.ersService.login(this.inputUsername, this.inputPassword )) {
      this.invalidInput = true;

    }
  }

}
