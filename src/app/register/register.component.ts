import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//public registerForm!:FormGroup;
userurl = environment.userapi;
registerForm = new FormGroup({
 // username: new FormControl(''),
 // useremail: new FormControl(''),
  //password: new FormControl(''),
 // mobile: new FormControl('')
})

submitted = false;
constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }


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
  this.password = new FormControl('', [Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}")]);


  this.mobile = new FormControl('', [Validators.required, Validators.pattern('[789][0-9]{9}')]);
    this.myForm = new FormGroup({
      
      'firstname': this.firstname,
      'lastname': this.lastname,
      'driverage': this.driverage,
      'adhaarno': this.adhaarno,
      'useremail': this.useremail,
      'password': this.password,
      
      'mobile': this.mobile






   //  this.registerForm = this.formBuilder.group({
   // username: ['', Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(4), Validators.maxLength(16)],
    //useremail: ['', Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
   // password: ['', Validators.required, Validators.pattern('[A-Za-z0-9]*'), Validators.minLength(6), Validators.maxLength(14)],
    //mobile: ['', Validators.required, Validators.pattern('[789][0-9]{9}')]
  });
}
get f() { return this.registerForm.controls; }
submitHandler() {
  this.submitted = true;
  if (this.registerForm.invalid) {
    return;
  }

  this.http.post<any>(this.userurl, this.registerForm.value)
    .subscribe(res => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      })
  
      Toast.fire({
        icon: 'success',
        title: 'Sign Up Successful'
      })
      this.registerForm.reset();
      this.router.navigate(['login']);
    })

}

}

  