import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;
  message: any;

  constructor(private _service: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  doLogin(){
    let response = this._service.login(this.username, this.password);
    response.subscribe(data => {
      console.log(data);
      this.message = data;
      this._router.navigate(["/products"])
    })
  }

}
