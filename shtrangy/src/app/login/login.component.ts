import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
public name:string;
  constructor(public loginService: LoginService) {
    this.name="bingo";
  }

  ngOnInit(): void {
  }

  setpst(){
    this.loginService.setpost(this.name);
  }

}
