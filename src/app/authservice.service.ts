import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:3000/users"



  constructor(private http:HttpClient, private route:Router) {

   }
  _registerUser(userData){

    return this.http.post<any>(this.url+"/register", userData)
  }

  _loginUser(userData){
    return this.http.post<any>(this.url+"/login", userData)
  }

  isLoggedin(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  Logout(){
    localStorage.removeItem('token')
    //this.route.navigate(["/home"])
  }
}
