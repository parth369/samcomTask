import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactbookService } from '../contactbook.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

  contactForm!: FormGroup;
  validateEmail = true;
  @Output() userAdded: EventEmitter<any> = new EventEmitter<any>();
  constructor(public fb: FormBuilder,private userdata: ContactbookService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({

      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [''],
      avatar: ['', [Validators.required]]
    })
  }

  onFileInput($event: any) {
    console.log($event);
  }

  addDummyUser(){
    this.userdata.addUserContact(this.contactForm.value)
    .subscribe((res)=>{
      console.log(res);
      this.userAdded.emit();
    },(err)=>{
      console.log(err);
    })
  }
}
