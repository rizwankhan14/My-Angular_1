import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { 
  Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  //Properties for the form and form elements/controls
  myForm: FormGroup | any;
  username: FormControl | any;
  firstname: FormControl | any;
  lastname: FormControl | any;
  driverage: FormControl | any;
  adhaarno: FormControl | any;
  useremail: FormControl | any;
  password: FormControl | any;
  mobile: FormControl | any;

  ngOnInit(): void {
    
    this.firstname = new FormControl('', [Validators.required,Validators.pattern('[A-Za-z]*'), Validators.minLength(4), Validators.maxLength(16)]);
    this.lastname = new FormControl('', [Validators.required,Validators.pattern('[A-Za-z]*'), Validators.minLength(4), Validators.maxLength(16)]);
    this.driverage = new FormControl('', [Validators.required,Validators.pattern('[3456][0-60]{1}')]);
    this.adhaarno = new FormControl('', [Validators.required,Validators.pattern('[0-9]{12}')]);
    this.useremail = new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
   
    
    this.mobile = new FormControl('', [Validators.required, Validators.pattern('[789][0-9]{9}')]);
    this.myForm = new FormGroup({
      
      'firstname': this.firstname,
      'lastname': this.lastname,
      'driverage': this.driverage,
      'adhaarno': this.adhaarno,
      'useremail': this.useremail,
      
      'mobile': this.mobile
    })

  }

  //Event for the button
  onSubmit()
  {
    console.log(this.myForm);
  }




}
