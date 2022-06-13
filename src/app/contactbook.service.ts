import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactbookService {

  constructor(private http: HttpClient) { }
  getUserContactList(){
    return this.http.get("https://reqres.in/api/users");
  }

  addUserContact(userData:any){
    return this.http.post("https://reqres.in/api/users",userData);
  }
}
