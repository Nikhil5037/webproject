import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authservice.service';
import { UserModel } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData:UserModel = new UserModel
  constructor(private auth:AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  registeruser(){

    this.auth._registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.route.navigate(["/surveys"])
      },
      err => console.log(err)
    )
  }


}
