import { Component } from '@angular/core';
import { AuthService } from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SurveyIt';

  constructor(  private auth:AuthService
    ){}

  verifyLogin(){
    return this.auth.isLoggedin()
  }

  performLogout(){
     return this.auth.Logout()

  }

}
