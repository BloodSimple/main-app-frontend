import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { MedicalCenterDTO } from './MedicalCenterDTO';
import { UserDTO } from './UserDTO';
@Injectable({
  providedIn: 'root'
})
export class SystemadminServiceService {
  constructor(private http:HttpClient) { }


  readonly centerUrl = 'http://localhost:8080/api/centers'

   reqHeader = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Accept', 'application/json');


  viewCenters():Observable<MedicalCenterDTO[]>{
    return this.http.get<MedicalCenterDTO[]>(this.centerUrl + '/')
  }
  admins():Observable<UserDTO[]>{
    return this.http.get<UserDTO[]>(this.centerUrl + '/selectadmin')
  }
  registerCenter(data:MedicalCenterDTO){
    return this.http.post(this.centerUrl + '/', data)
  }
  allUsers():Observable<UserDTO[]>{
    return this.http.get<UserDTO[]>(this.centerUrl + '/allusers')
  }
  putAdmin(centerName:String, data:UserDTO){
    return this.http.put(this.centerUrl + '/' + centerName + '/admin', data)
  }

}
