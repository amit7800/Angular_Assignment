import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isLoggedIn: any;
  displayStyle = 'none';
  _id: any;

  user: any = {
    first_name: '',
    last_name: '',
    address: { add_Line1: '', add_Line2: '', city: '', state: '' },
    phone: 0,
    email: '',
   
  };
  

  constructor(
    private service: CommonService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr : ToastrService
  ) {}


  
  
 

  ngOnInit(): void {
    console.log('Dashboard oninit');
    this.isLoggedIn = JSON.parse(localStorage.getItem('user') as any);
    this._id = this.isLoggedIn._id
    }
  

 
    openPopup() {
      this.user = JSON.parse(localStorage.getItem('user') as any);
   
      
      this.displayStyle = 'block';
    }
    closePopup() {
      this.displayStyle = 'none';
    }
    handleUpdate(data: any) {
      this.service.updateUser(this._id, data).subscribe((res: any) => {
        Swal.fire(res.message,'Success')
        if (res.status) {
          localStorage.setItem('user', JSON.stringify(res.result));
          this.ngOnInit();
          this.closePopup();
        }
      });
    }
  
    handleLogout() {
      localStorage.clear();
      this.toastr.success('Logout Successfull','Success')
      this.router.navigate(['/login']);
    }
  
  

 
  
 

  }

