import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { HttpService } from '../http.service';
import {Post} from './../models';
import {User} from './../models';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {


  // posts: Post[];
  users: User[];

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    // this.http.getPosts().subscribe(posts => {
    //   this.posts = posts as Post[];
    //   console.log(posts);
    // })
     this.http.getUsers().subscribe(users => {
        this.users = users as User[];
        console.log(this.users);
      })
  }
  displayDetails = false;
  showDetails:any;
 
  viewDetails(id:any){
      this.displayDetails = true;
      this.showDetails = this.users.filter(indx => {
        return indx.id ===id;
      });
      console.log(this.showDetails);
   
  }
backToUsers(){
  this.displayDetails = false;
}
  }




