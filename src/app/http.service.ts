import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // private postUrl = 'https://jsonplaceholder.typicode.com/posts';
  private userUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  // getPosts(){
  //   return this.http.get(this.postUrl);
  // }
  getUsers(){
    return this.http.get(this.userUrl);
  }
 
}
