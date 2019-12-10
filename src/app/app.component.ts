import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonService } from './services/common.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // modalRef: BsModalRef;
  title = 'basics';

  constructor(
    public commonService: CommonService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    console.log('app component', this.commonService.names);
    this.authService.login();
    console.log('isLogin -app comp', this.authService.isLogIn);
  }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }

  goToQuestions() {
    this.router.navigate(['/questions']);
  }
}
