import { Component, OnInit } from '@angular/core';

import { AboutUsService } from '../../services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public aboutUsList: any = [];
  constructor(
    private aboutUsService: AboutUsService,
  ) {

  }

  public ngOnInit(): void {
    this.getAboutUsList();
  }

  private getAboutUsList(): void {
    this.aboutUsService.fetchAboutUsList().subscribe({
      next: (result: any) => {
        this.aboutUsList = result;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error', error);
      },
    })
  }
}
