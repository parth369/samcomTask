import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactbookService } from 'src/app/contactbook.service';

@Component({
  selector: 'app-singlecontact',
  templateUrl: './singlecontact.component.html',
  styleUrls: ['./singlecontact.component.scss']
})
export class SinglecontactComponent implements OnInit {

  @Input() contact!: any;
  @Output() deleteContact: EventEmitter<any> = new EventEmitter<any>();

  contactList : any;
  constructor(private userdata: ContactbookService) { }

  ngOnInit(): void {

    this.userdata.getUserContactList().subscribe((response)=> {
      
      this.contactList = response;

    });

  }

  deleteContactF(){
    this.deleteContact.emit(this.contact);
  }

}
