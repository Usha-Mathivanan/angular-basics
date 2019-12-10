import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions.component';
import { CommonService } from '../services/common.service';
import { AnswersComponent } from './answers/answers.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AnswersModule } from './answers/answers.module';
import { QuestionsRoutingModule } from './questions-routing.module';
import { AuthService } from '../auth/auth.service';

const routes: Routes = [
    {
        path: '',
        component: QuestionsComponent,
    }
];

@NgModule({
    declarations: [QuestionsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        QuestionsRoutingModule,
        AnswersModule,
    ],
    providers: [CommonService, AuthService],
})

export class QuestionsModule {
}
