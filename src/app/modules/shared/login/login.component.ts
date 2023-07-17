import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public userList: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private ngbActiveModal: NgbActiveModal,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  public ngOnInit(): void {
    this.getUserList();
  }

  public clickOnLogin(): void {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      const findUser = this.userList.find((item: any) => item.email.toLowerCase() === formValue.email.toLowerCase());
      if (findUser) {
        if (findUser.password === formValue.password) {
          localStorage.setItem('userType', JSON.stringify(findUser));
          this.ngbActiveModal.close(true);
        } else {
          alert('Invalid Password');
        }
      } else {
        alert('Invalud User');
      }
    }
  }

  public closeModel(): void {
    this.ngbActiveModal.close(false);
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
