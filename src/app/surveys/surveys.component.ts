import { Component, OnInit, Inject } from '@angular/core';
import { surveyModel } from '../survey';
import { SurveysService } from '../surveys.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core/testing';
import { AuthService } from '../authservice.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css'],
})
export class SurveysComponent implements OnInit {
  surveyList: surveyModel[] = [];
  constructor(
    private _surveyService: SurveysService,
    private http: HttpClient,
    private route: Router,
    @Inject(DOCUMENT) private document: Document,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this._surveyService.getSurveys().subscribe(
      (data) => {
        this.surveyList = data;
        console.log(localStorage.getItem('token'))
      },
      (err) => console.log(err)
    );
  }

  //sending data to the api for delete operation
  deleteSurvey(data) {
    this._surveyService.deleteSurvey(data._id).subscribe(
      (res) => this.document.defaultView.location.reload(),
      (err) => console.log(data._id)
    );
  }
  displayButton() {
    return this.auth.isLoggedin();
  }
}
