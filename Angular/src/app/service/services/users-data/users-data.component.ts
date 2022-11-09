import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../../environments/environment'
@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {
apiURL : any = environment.apiUrl
  constructor(private http:HttpClient) { }
  users(data:any)
  {
    // return this.http.post("localhost:7800/user/userLogin", data);
    return this.http.post(`${this.apiURL}/user/userLogin`, data);

  }

  ngOnInit(): void {
  }

}
