import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo:BehaviorSubject<any>=new BehaviorSubject(null); 
  jwtHelper=new JwtHelperService()
  constructor() { 
    this.loadUserInfo();
  } 
  
  loadUserInfo(){ 
    if(!this.userInfo){
    const accessToken=localStorage.getItem('access_token') 
    if (accessToken){
    const decryptedUser=this.jwtHelper.decodeToken(accessToken) 
    console.log(decryptedUser)

    const data={
      access_token:accessToken,
      refresh_token: localStorage.getItem('refresh_token') ,
      username:decryptedUser.username,
      userId:decryptedUser.sub,
      tokenExpiration:decryptedUser.exp
    } 

    // this.userInfo.next(data)
  }
    }
  }

  userLogin(userpayLoad:any){ 
    console.log(userpayLoad) 

    const accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs"
    const refreshToken="yummy" 

    localStorage.setItem('access_token', accessToken) 
    localStorage.setItem('refresh_token',refreshToken) 
    
    const decryptedUser=this.jwtHelper.decodeToken(accessToken) 
    console.log(decryptedUser)

    const data={
      access_token:accessToken,
      refresh_token:refreshToken,
      username:decryptedUser.username,
      userId:decryptedUser.sub,
      tokenExpiration:decryptedUser.exp
    } 

    this.userInfo.next(data)
  }
}
