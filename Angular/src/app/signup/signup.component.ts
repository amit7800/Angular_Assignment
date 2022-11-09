import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupuser: any

  submitted = false;
  constructor(private router: Router,
    private service: CommonService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder) { }
  form: FormGroup = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    add_Line1: new FormControl(''),
    add_Line2: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        add_Line1: ['', [Validators.required]],
        add_Line2: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],

      }

    )
  }
  onSubmit(form: any) {
    console.log(form)



    this.service.userSignup(this.form.value)
      .subscribe((res: any) => {
        console.log(res)
        this.signupuser = res;
        if (res.status) {
          this.toastr.success(res.message, 'Success');
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.result));
          this.router.navigate(['/dashboard']);
        } else {
          this.toastr.warning(res.message, 'Warning');
        }

      });
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

}
