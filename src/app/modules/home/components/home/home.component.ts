import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userList: any = [];

  constructor(
    private commonService: CommonService,
  ) {

  }

  public ngOnInit(): void {
    this.getUserList();
  }

  private getUserList(): void {
    this.commonService.fetchUserList().subscribe({
      next: (result: any) => {
        this.userList = result;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error', error);
      },
    })
  }
}
