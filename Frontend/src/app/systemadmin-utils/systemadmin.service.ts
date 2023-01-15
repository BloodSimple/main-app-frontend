import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { MedicalCenterDTO } from './MedicalCenterDTO';
import { UserDTO } from './UserDTO';
import { AppointmentDTO } from './AppointmentDTO';
@Injectable({
  providedIn: 'root'
})
export class SystemadminServiceService {
  constructor(private http:HttpClient) { }


  readonly centerUrl = 'http://localhost:8080/api/centers'
  readonly sysAdminUrl = 'http://localhost:8080/api/sysadmin'
  readonly scheduleUrl = 'http://localhost:8080/api/centers'


   reqHeader = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Accept', 'application/json');


  viewCenters():Observable<MedicalCenterDTO[]>{
    this.reqHeader = this.getHeaders();
    return this.http.get<MedicalCenterDTO[]>(this.centerUrl + '/', {headers: this.reqHeader})
  }
  admins():Observable<UserDTO[]>{
    this.reqHeader = this.getHeaders();
    return this.http.get<UserDTO[]>(this.centerUrl + '/selectadmin', {headers: this.reqHeader})
  }
  registerCenter(data:MedicalCenterDTO){
    this.reqHeader = this.getHeaders();
    return this.http.post(this.centerUrl + '/', data, {headers: this.reqHeader})
  }
  allUsers():Observable<UserDTO[]>{
    this.reqHeader = this.getHeaders();
    return this.http.get<UserDTO[]>(this.centerUrl + '/allusers', {headers: this.reqHeader})
  }
  putAdmin(centerName:String, data:UserDTO){
    this.reqHeader = this.getHeaders();
    return this.http.put(this.centerUrl + '/' + centerName + '/admin', data, {headers: this.reqHeader})
  }
  registerSystemAdmin(data:UserDTO){
    this.reqHeader = this.getHeaders();
    return this.http.post(this.sysAdminUrl + '/', data, {headers: this.reqHeader})
  }
  viewSchedule():Observable<AppointmentDTO[]>{
    this.reqHeader = this.getHeaders();
    return this.http.get<AppointmentDTO[]>(this.scheduleUrl+'/admin/1/schedule', {headers: this.reqHeader})
  }
  allAdmins():Observable<UserDTO[]>{
    this.reqHeader = this.getHeaders();
    return this.http.get<UserDTO[]>(this.sysAdminUrl+'/', {headers: this.reqHeader})
  }
  public updateUser(u:UserDTO): Observable<any>{
    this.reqHeader = this.getHeaders();
    return this.http.put("http://localhost:8080/api/users/", u, {headers: this.reqHeader});
}
  // getUsersForAppointment(id:number):Observable<UserDTO[]>{
  //   return this.http.get<UserDTO[]>(this.scheduleUrl+'/1/schedule/'+id)
  // }

  createAppointment(a:AppointmentDTO):Observable<any>{
    this.reqHeader = this.getHeaders();
    return this.http.post(this.scheduleUrl+'/admin/defineAppointment', a, {headers: this.reqHeader});
  }

  getHeaders() {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
    });
    return headers;
}
}
