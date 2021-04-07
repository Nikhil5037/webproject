import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  //private _surveyUrl = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  getAnalytics(token){
    return this.http.get<any>(`http://localhost:3000/userstats/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNjA2YjAyNmYyMDBhZWIyMmUzZjQ4YWM0IiwiaWF0IjoxNjE3NzgyMjc1fQ.sbCBNNI9Csn4htR8tuxCwYUtsEXxiy-sU51LPHp7IxA`)

  }
}
