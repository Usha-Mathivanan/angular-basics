import { Component, OnInit } from "@angular/core";
import { CommonService } from '../../services/common.service';
import { slideInAnimation } from 'src/app/animation';

@Component({
    selector: 'app-answers',
    templateUrl: './answers.component.html',
    styleUrls: ['./answers.component.scss'],
    animations: [slideInAnimation]
})

export class AnswersComponent implements OnInit {
    constructor(private commonService: CommonService) {
    }

    ngOnInit() {
        console.log('answers');
    }


}
