import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './login.component';

@Injectable()
export class LoginService {
  name:any;
  constructor(private http: HttpClient) { }
  setpost(name:string){
    this.http.get<{message:string}>("http://localhost:8080/api/login")
    .subscribe((data)=>{
      this.name =data;
    });
  }
}
