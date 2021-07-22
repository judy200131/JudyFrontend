import { Component, EventEmitter } from '@angular/core';
// import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'judyfrontend';
  title = 'This is my first angular project!';

   appEvent = new EventEmitter();

      count = 0;
   
      addCount(){
        this.appEvent.emit(this.count++);
      }
      subCount(){
        this.appEvent.emit(this.count--);
      }



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



// ACTIVITY 5
 
  // devices : Device []= [
  //   {
  //     name: "Device01",
  //     brand: "Dell",
  //     model: "Latitude 120",
  //     year:"2021",
  //     serial:"8W53222"
  //   },
  //   {
  //     name: "Device02",
  //     brand: "HP",
  //     model: "Pavillion",
  //     year:"2021",
  //     serial:"4CE0460D0G"
  //   },
  //   {
  //     name: "Device03",
  //     brand: "ACER",
  //     model: "Aspire 1",
  //     year:"2021",
  //     serial:"A560UD"
  //   }

  // ]

}
