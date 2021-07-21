import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'judyfrontend';
  title = 'This is my first angular project!';
  message = "This is for input parameter";

  appEvent(event: any){
     alert(event);
  }
}
