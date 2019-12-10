import { QuestionsComponent } from './questions.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AnswersComponent } from './answers/answers.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswersModule } from './answers/answers.module';
import { AuthGaurd } from '../auth/auth.gaurd';

const routes: Routes = [
    {
        path: '',
        component: QuestionsComponent,
        children: [
            { path: 'answers', component: AnswersComponent, canActivate: [AuthGaurd] }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)],
    exports: [
        RouterModule
    ]
})

export class QuestionsRoutingModule {
}
