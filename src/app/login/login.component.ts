import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authservice.service';
import { UserModel } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData:UserModel = new UserModel
  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this.auth._loginUser(this.userData).subscribe(
      //res=> this.route.navigate(["/surveys"]),
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.route.navigate(['/surveys'])
      },
      err => console.log(err)
    )
  }


}
