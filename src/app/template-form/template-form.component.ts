// template-driven FORMS EXAMPLE
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from '../device.service';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(
    private router: Router,
    private deviceService: DeviceService
    ) { }

  ngOnInit(): void {
  }

  addDevice(form: NgForm){
    form.value.id = this.deviceService.getId()
    this.deviceService.addDevice(form.value);
    this.router.navigate(['/list']);
  }
 
}








// @Component({
//   selector: 'app-template-form',
//   templateUrl: './template-form.component.html',
//   styleUrls: ['./template-form.component.css']
// })
// export class TemplateFormComponent implements OnInit {

//   @Output() deviceDetail = new EventEmitter();


//   constructor() { }

//   ngOnInit(): void {
//   }

// addDevice(form:any){
//   // alert('add device')
//   this.deviceDetail.emit(form.value);
//   console.log(form.value);
  
// }

// }



