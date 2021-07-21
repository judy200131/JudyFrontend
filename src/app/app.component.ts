import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'judyfrontend';
  title = 'This is my first angular project!';
  appMessage = "";

  appEvent(event: any){
    this.appMessage = event;
    //  alert(event);
  }
}
