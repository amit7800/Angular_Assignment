import { Component, DoCheck, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck {

  isLogin:any=true
  constructor(private service: CommonService, private router: Router,private toastr: ToastrService ) { }

  ngOnInit(): void {
    
  }

  ngDoCheck(){
    this.isLogin = localStorage.getItem('isLoggedIn')==='true'?true:false
  }
  logout() {
    this.toastr.success('Logout Sucessfully');
    this.router.navigate(['/login']);
    this.service.clearStorage();
  
  }
}
