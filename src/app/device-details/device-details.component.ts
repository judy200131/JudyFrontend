import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device } from './../models';
import { Router } from '@angular/router';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  @Input() deviceDetail: Device;

  @Output() updateDetail: EventEmitter <any> = new EventEmitter();
  
 
  constructor(private router: Router,
    private deviceService: DeviceService
    ) { }

  ngOnInit(): void {
   
  }
  updateDevice(id:number){
    // this.updateDetail.emit(true);
    // this.deviceService.id(this.deviceDetail.id);
    this.router.navigate([`/update/${id}`]);
  }
}
