import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(
    private ngbActiveModal: NgbActiveModal,
  ) {}


  public logout(): void {
    this.ngbActiveModal.close(true);
  }

  public closeModel(): void {
    this.ngbActiveModal.close(false);
  }
}
