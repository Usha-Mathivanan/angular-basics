import { QuestionsModule } from './questions/questions.module';
import { CommonService } from './services/common.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from './auth/auth.service';
// import { ModalModule } from 'ngx-modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SampleModalComponent } from './sample-modal/sample-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [
    CommonService,
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SampleModalComponent]
})
export class AppModule { }
