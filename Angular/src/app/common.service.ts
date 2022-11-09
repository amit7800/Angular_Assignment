import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiURL: any = environment.apiUrl;
  constructor(private http: HttpClient) {}

  users(data: any) {
    return this.http.post(`${this.apiURL}/user/Login`, data);
  }
  userSignup(data: any) {
    console.log("amit", data)
    return this.http.post(`${this.apiURL}/user/userSignup`, data);
  }
  patientList() {
    return this.http.get(`${this.apiURL}/user/getPatientlist`);
  }
  patientDelete(_id: any) {
    console.log('From Service', _id);
    return this.http.delete(`${this.apiURL}/user/deletePatient/${_id}`);
  }
  addPatient(data: any) {
    return this.http.post(`${this.apiURL}/user/AddPatient`, data);
  }

  getPatinetById(_id: any) {
    return this.http.get(`${this.apiURL}/user/getPatient/${_id}`);
  }

  updatePatient(data: any,_id:any) {
    console.log('From Srvice Update', data,_id);
    let updatedData = {
      _id:_id, 
      fullname:data.fullname,
      phone:data.phone,
      address:data.address,
      email:data.email,
      password:data.password

    }
    return this.http.post(`${this.apiURL}/user/UpdatePatient`, updatedData);
  }
  searchPatient(Key: any) {
    return this.http.get(`${this.apiURL}/user/patientSearch/${Key}`);
  }

  clearStorage(){
    console.log("Clear storage")
    localStorage.clear();
  }
   /*---------------Delete Multiple-------------*/

   deleteMultiple(id_array:any){

    console.log("From service delete api",id_array);

    return this.http.post(`${this.apiURL}/user/deleteMultiple`,{id_array});

  }
  updateUser(_id: any, data: any) {
    let userData = { ...data, _id };
    console.log(userData)
    return this.http.post(`${this.apiURL}/user/updateUser`, userData);
  }
}
