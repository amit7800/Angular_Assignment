import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  updatepatient: any;
  addpatient: any;
  show: boolean = false;
  constructor(
    private service: CommonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  user = { _id:'',fullname: '', phone: '', address: '', email: '', password: '' };
  _id :any;

  ngOnInit(): void {
    if (this.route.snapshot.params['_id']) {
      this.show = true;
    } else {
      this.show = false;
    }
    this.service
      .getPatinetById(this.route.snapshot.params['_id'])
      .subscribe((res: any) => {
        console.log(res.result);
        this.user = res.result;
        console.log(this.user)
        this._id=res.result._id
        
      });
  }
  onSubmit(form: any) {
    
    console.log(form)
    this.service.addPatient(form).subscribe((response) => {
      this.addpatient = response;
      Swal.fire('Added Successfully!');
      this.router.navigate(['/dashboard']);
    });

  }

  // updateHandler(form:any){
  //   let data = {
  //     _id:this._id, 
  //     fullname:form.fullname,
  //     phone:form.phone,
  //     address:form.address,
  //     email:form.email,
  //     password:form.password

  //   }
  //   console.log("Update handler",form)
  //   this.service.updatePatient(data).subscribe((res:any)=>{
  //     console.log(res)
  //     this.router.navigate(['/dashboard']);
  //     Swal.fire('updated Successfully!');
  //   })
  // }
}
