import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalInitComponent } from '../modal-init/modal-init.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @ViewChild(ModalInitComponent)
  
  ngOnInit(): void {
    modalInit:ModalInitComponent;
   
    
  }

}
