import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData={
    username:"",
    password:""
  }
  constructor(private authService:AuthService,private router:Router) { } 

  ngOnInit(): void {
  } 

  userLogin(){
    console.log(this.loginData);
    this.authService.userLogin(this.loginData); 
    alert(this.loginData.username+"logged in successfully") 
    this.router.navigate(['/dashboard'])

  }

}
