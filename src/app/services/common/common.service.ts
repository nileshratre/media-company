import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient,
  ) { }


  public fetchHeaderList() {
    return this.http.get('assets/mockData/header.json');
  }

  public fetchUserList() {
    return this.http.get('assets/mockData/userData.json');
  }
}
