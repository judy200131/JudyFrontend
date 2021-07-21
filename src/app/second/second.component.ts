
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-second',
    template: `<p>second component works <br><br>{{secondMessage ? secondMessage: "_________"}}</p>`,
    styles: ['p {color:red}']
  })
  export class SecondComponent {
    @Input() secondMessage = "";
    
  }