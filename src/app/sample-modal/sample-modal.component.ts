import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
    selector: 'app-modal-template',
    templateUrl: './sample-modal.component.html'
})

export class SampleModalComponent implements OnInit {
    title;
  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }


}
