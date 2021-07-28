import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { HttpService } from '../http.service';
import {Post} from './../models';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  posts: Post[];

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getPosts().subscribe(posts => {
      this.posts = posts as Post[];
      console.log(posts);
    })
  }

}
