import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { surveyModel } from '../survey';
import { SurveysService } from '../surveys.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  analysisList: surveyModel[] = [];
  constructor(private analytics: AnalyticsService) {}

  ngOnInit(): void {
    this.analytics.getAnalytics(localStorage.getItem("token")).subscribe(
      (data) => {
        this.analysisList = data;
        console.log(data)
      },
      (err) => console.log(err)
    );
  }
}
