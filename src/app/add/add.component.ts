import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormsModule,ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { surveyModel } from '../survey';
import{SurveysService} from "../surveys.service"
import { UserModel } from '../user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  surveyItem:surveyModel[] = []
  userItem:UserModel
  postUrl = "http://localhost:3000/add"

  constructor(private form: FormsModule, private surveyService:SurveysService, private http:HttpClient, private route:Router) { }
  ngOnInit() {
  }

  //sending Data entered in form to the backend api using http
  onSubmit(formData){
      this.surveyService.createSurvey(formData).subscribe(
      (res) => this.route.navigate(["/surveys"]) ,
      (err) =>{console.log(err)}

    )


  }

}
