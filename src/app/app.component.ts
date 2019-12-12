import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonService } from './services/common.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from './auth/auth.service';
import { SampleModalComponent } from './sample-modal/sample-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // modalRef: BsModalRef;
  title = 'basics';
  modalRef: BsModalRef;

  constructor(
    public commonService: CommonService,
    private router: Router,
    private authService: AuthService,
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    console.log('app component', this.commonService.names);
    this.authService.login();
    console.log('isLogin -app comp', this.authService.isLogIn);
  }

  openModal() {
    this.modalRef = this.modalService.show(SampleModalComponent, {
      initialState: {
        title: 'Sample Modal',
        data: {}
      }
    });
  }

  goToQuestions() {
    this.router.navigate(['/questions']);
  }
}
