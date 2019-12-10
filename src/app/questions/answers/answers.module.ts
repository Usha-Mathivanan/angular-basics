import { NgModule, Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { AnswersComponent } from './answers.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-modal';

const routes: Routes = [
    {
        path: '',
        component: AnswersComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        RouterModule.forChild(routes)
    ],
    declarations: [AnswersComponent],
    providers: [CommonService]
})

export class AnswersModule {
}
