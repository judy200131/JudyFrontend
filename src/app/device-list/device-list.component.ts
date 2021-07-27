  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from './../models';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

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
    // {
    //   id:2,
    //   name: "Device02",
    //   brand: "HP",
    //   model: "Pavillion",
    //   year:"2021",
    //   serial:"4CE0460D0G"
    // },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addDevice(){
    this.router.navigate(['/add']);
  }

}