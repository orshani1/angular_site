import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly EMAIL_KEY = 'EMAIL';
  constructor(private _router:Router) {
    
   }

  isAuthenticated:boolean = false;

  ngOnInit(): void {
  }
  handleLogin(form:any):void{
    console.log(form);
    if(form.email === "abc@gmail.com" && form.password ==="a12345"){
      this.isAuthenticated = true;
      localStorage.setItem(this.EMAIL_KEY,form.email);
      this._router.
    }
    else{
      this.isAuthenticated = false;
    }
  }

}
