import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Device } from './../models';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  id:number;

  @Input() device: Device = {
      id:null,
      name:'',
      brand:'',
      model:'',
      year:null,
      serial:'',
  };

  @Output() update:EventEmitter<any>= new EventEmitter();

  updateForm = new FormGroup({
    id:new FormControl(''),
    name: new FormControl(''),
    brand: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),
    serial: new FormControl(''),
  })
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
    id:new FormControl(this.device.id),
    name: new FormControl(this.device.name),
    brand: new FormControl(this.device.brand),
    model: new FormControl(this.device.model),
    year: new FormControl(this.device.year),
    serial: new FormControl(this.device.serial),
    });
  }

  updateDevice(){
    this.router.navigate(['/list']);
  }
}
//  updateDevice(showUpdate){
//   console.log(this.updateForm.value);
//   // this.updateForm;
//   // console.log(form.value);
// }

// updateDevice(){
//   this.update.emit(this.updateForm);
// }



