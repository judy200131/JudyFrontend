// template-driven FORMS EXAMPLE
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @Output() deviceDetail = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

addDevice(form:any){
  // alert('add device')
  this.deviceDetail.emit(form.value);
  console.log(form.value);
  
}

}
