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
  readonly readQRurl = 'http://localhost:8080/api/read-qr/'

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
  registerSystemAdmin(data:UserDTO){
    return this.http.post(this.sysAdminUrl + '/', data)
  }
  viewSchedule():Observable<AppointmentDTO[]>{
    return this.http.get<AppointmentDTO[]>(this.scheduleUrl+'/2/schedule')
  }
  allAdmins():Observable<UserDTO[]>{
    return this.http.get<UserDTO[]>(this.sysAdminUrl+'/')
  }
  public updateUser(u:UserDTO): Observable<any>{
    return this.http.put("http://localhost:8080/api/", u);
}
  public  upload(file:any):Observable<any> {  
    const formData = new FormData(); 
    formData.append("image", file);      
    return this.http.post('http://localhost:8080/upload/image', formData, { observe: 'response' })
}
  public readQR(file:String):Observable<any>{
    return this.http.get<any>(this.readQRurl+file)

  }
  // getUsersForAppointment(id:number):Observable<UserDTO[]>{
  //   return this.http.get<UserDTO[]>(this.scheduleUrl+'/1/schedule/'+id)
  // }

}
