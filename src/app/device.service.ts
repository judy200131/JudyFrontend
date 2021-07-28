import { Injectable } from '@angular/core';
import { Device } from './models';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
 
  devices : Device []= [
    {
      id:0,
      name: "Device01",
      brand: "Dell",
      model: "Latitude 120",
      year:"2021",
      serial:"8W53222"
    },
    {
      id:1,
      name: "Device02",
      brand: "HP",
      model: "Pavillion",
      year:"2021",
      serial:"4CE0460D0G"
    },
  ]
  id: number;
  constructor() { }
  
  getDevices(){
    return this.devices;
  }
  getDevice(id:number){
    // const index = this.devices.findIndex((obj => obj.id ==id));
    // return this.devices[index];
    console.log('SERVICE_ID', id);
    return this.devices.find(device =>device.id ===id)
  }
  addDevice(device:Device){
    this.devices.push(device);
    console.log(this.devices);
  }
  updateDevice(updatedDevice:Device){
    // this.update.emit(this.updateForm);
    let index = this.devices.findIndex(device =>device.id === updatedDevice.id)
    this.devices[index] = updatedDevice;
    console.log(this.devices);
  }
  getId():number{
    return this.devices[this.devices.length -1].id + 1
  }
}


