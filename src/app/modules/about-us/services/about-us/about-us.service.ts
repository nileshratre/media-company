import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(
    private http: HttpClient,
  ) { }

  public fetchAboutUsList() {
    return this.http.get('assets/mockData/about-us.json')
  }
}
