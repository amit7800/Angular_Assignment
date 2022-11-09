import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginuser: any;
  form:any
  submitted:any

  constructor(
    private service: CommonService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  user = { email: '', password: '' };

  onSubmit(form: any) {
    console.log(form);
    //     if(form.email === 'amit@gmail.com' && form.password === 'amit12'){

    //       localStorage.setItem('isLoggedIn', JSON.stringify(true))

    // }

    this.service.users(form).subscribe((response) => {
      this.loginuser = response;
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      this.toastr.success('Login Sucessfully')
      this.router.navigate(['/dashboard']);
    });
  }
  ngOnInit() {
    this.service.clearStorage();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
