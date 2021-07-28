import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit { 

  public data={
    username:'',
    userId:''
  }

  constructor(private authService:AuthService) { }

  ngOnInit(): void { 
    this.authService.userInfo.subscribe(
      value=>{
       this.data.username=value.username;
       this.data.userId=value.userId;
      }
    )
  }

}
