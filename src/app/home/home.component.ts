import { Component, OnInit } from '@angular/core';
import { ContactbookService } from '../contactbook.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  addUser:boolean = false;
  contactList: any;
  constructor(private userdata: ContactbookService) { }

  ngOnInit(): void {
   this.userdata.getUserContactList().subscribe((response: any)=> {
    this.contactList = response.data;
    console.log(this.contactList.data)});
  }

  deleteSingleContact(singleContact:any){
    this.contactList = this.contactList.filter((elem:any)=> elem.id != singleContact.id)
  }

  onSortChange(event:any){
    if(event.value === 'A-Z'){
      this.contactList.sort(this.compare);
    }else{
      this.contactList.sort(this.compare).reverse();
    }
  }

  compare( a : any, b : any) {
    if ( a.first_name < b.first_name ){
      return -1;
    }
    if ( a.first_name > b.first_name ){
      return 1;
    }
    return 0;
  }


  addAUser(){
    this.addUser = true;
  }


  userAddedEvent(){
    this.addUser = false;
  }
}
