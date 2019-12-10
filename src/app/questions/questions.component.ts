import { Component, OnInit } from "@angular/core";
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {
    constructor(
        private commonService: CommonService,
        private router: Router,
        public authService: AuthService) {
    }

    ngOnInit() {
        this.getQuestions();
        this.authService.login();
        console.log('isLogin -app comp', this.authService.isLogIn);
    }

    getQuestions() {
        const names = this.commonService.names;
        console.log('names', names);
        console.log('names');

    }
    goToAnswer() {
        this.router.navigate(['questions/answers']);
    }
}