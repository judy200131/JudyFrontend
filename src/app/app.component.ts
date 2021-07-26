import { Component,  EventEmitter, Output } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'judyfrontend';
  title = 'This is my first angular project!';
// ACTIVITY 5 and 6 TEMPLATE-DRIVEN FORM
  showUpdate = false;
  selectedDevice ;

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
    {
      id:2,
      name: "Device02",
      brand: "HP",
      model: "Pavillion",
      year:"2021",
      serial:"4CE0460D0G"
    },
  ]
  

  updateDevice(event,id){
    this.showUpdate = event;
    this.selectedDevice = this.devices.find(device=> device.id === id);
  }
  updateDisplay(event){

    this.devices.forEach(device => {

       if(device.id === event.value.id){
        device.name = event.value.name;
        device.brand = event.value.brand;
        device.model = event.value.model;
        device.year = event.value.year;
        device.serial = event.value.serial;
       }

    });

    this.showUpdate = false;
  }
  // addDevice(device: Device){
  //   console.log(device);
  //   this.devices.push(device);
  // }
  //ACTIVITY 4
  //  appEvent = new EventEmitter();

  //     count = 0;
   
  //     addCount(){
  //       this.count +=1;
        // PWEDE RA ING ANI
        // this.appEvent.emit(this.count++);
      // }
      // subCount(){
      //   this.count -=1;
        // PWEDE RA ING ANI
        // this.appEvent.emit(this.count--);
     // }



  // appMessage = "";

  // appEvent(event: any){
  //   this.appMessage = event;
    //  alert(event);

//  appMessageArray = ['hi', 'hello', 'goodbye', 'go', 'stop', 'please'];

//   showComponent = true;
 

//   appEvent(event:any){
//     alert(event);
//   }

//   showHide() {
//     this.showComponent = !this.showComponent;
//   }


}
