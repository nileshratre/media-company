import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services';
import { LoginComponent } from '../login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutComponent } from '../logout/logout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private orignalMenusList: any = [];
  public menuList: any = [];
  public isloggedIn: any | null = '';

  constructor(
    private ngbModal: NgbModal,
    private router: Router,
    private commonService: CommonService,
  ) {

  }

  public ngOnInit(): void {
    this.getHeaderList();
  }

  private getHeaderList(): void {
    this.commonService.fetchHeaderList().subscribe({
      next: (result: any) => {
        this.orignalMenusList = result;
        this.checkHeader();
      },
      error: (error: HttpErrorResponse) => {
        console.log('error', error);
      },
    })
  }

  private checkHeader(): void {
    this.menuList = [];
    const tempData: any = localStorage?.getItem('userType');
    this.isloggedIn = tempData ? JSON.parse(tempData) : null;
    this.orignalMenusList.map((resp: any) => {
      if (resp.id === 2 && this.isloggedIn) {
        this.menuList.push(resp);
      } else if (resp.id !== 2) {
        this.menuList.push(resp);
      }
    });
  }

  public getClickEvent(item: any): void {
    if (item.id === 4) {
      const tempData: any = localStorage?.getItem('userType');
      this.isloggedIn = tempData ? JSON.parse(tempData) : null;
      if (!this.isloggedIn) {
        const modalRef = this.ngbModal.open(LoginComponent,
          { centered: true, scrollable: true, backdrop: 'static' });
        const tempComponent: LoginComponent = modalRef.componentInstance;

        modalRef.result.then((result) => {
          if (result) {
            this.checkHeader();
          }
        });
      } else {
        const modalRef = this.ngbModal.open(LogoutComponent,
          { centered: true, scrollable: true, backdrop: 'static' });
        const tempComponent: LogoutComponent = modalRef.componentInstance;

        modalRef.result.then((result) => {
          if (result) {
            localStorage.clear();
            this.checkHeader();
            this.router.navigate(['home'])
          }
        });
      }
    }
  }
}
