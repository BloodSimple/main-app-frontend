import { HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient){ }

    reqHeader = new HttpHeaders().set('Content-Type', 'application/json')
                                   .set('Accept', 'application/json');

    public isFirstLogin(mail:String): Observable<any>{
            this.reqHeader = this.getHeaders();
            // const obj = { mail: mail };

            return this.http.put("http://localhost:8080/api/users/isFirstLogin", mail, {headers: this.reqHeader});
    }

    

    public updateUser(obj:any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.put("http://localhost:8080/api/users/", obj, {headers: this.reqHeader});
    }

    public getUserById(id: String): Observable<any> {
        this.reqHeader = this.getHeaders();
        return this.http.get("http://localhost:8080/api/users" + "/" + id, {headers: this.reqHeader});
    }

    public updatePassword(obj:any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.put("http://localhost:8080/api/users/updatepassword", obj, {headers: this.reqHeader});
    }

    public scheduleAppointment(medicalCenterId: any, startTime: any, personalId: any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.post("http://localhost:8080/api/centers/scheduleAppointment" + "/"+ medicalCenterId+"/"+startTime+"/"+personalId, null, {headers: this.reqHeader});
    }

    public cancelAppointment(obj:any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.post("http://localhost:8080/api/centers/cancelAppointment", obj, {headers: this.reqHeader});
    }

    public getAppointmentsByUser(id: any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.get("http://localhost:8080/api/centers/myAppointments" + "/" + id, {headers: this.reqHeader});
    }

    getHeaders() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
        });
        return headers;
    }

    public getUserWithDonatedBlood(id: any): Observable<any>{
        // this.reqHeader = this.getHeaders();
        return this.http.get("http://localhost:8080/api/users/donated-blood" + "/" + id, {headers: this.reqHeader});
    }

    public getAppointmentHistory(id: any): Observable<any>{
        // this.reqHeader = this.getHeaders();
        let medCentId = 1;
        let medID = localStorage.getItem('idForMedicalCenter');
        let medicalCenterId = parseInt(medID||"-1")
        return this.http.get("http://localhost:8080/api/users/history/" + id + "/" + medicalCenterId , {headers: this.reqHeader});
    }

    public getUserTakenAppointment(id: any): Observable<any>{
        // this.reqHeader = this.getHeaders();
        let medCentId = 1;///appointments-taken/{userId}/{mcId}
        
        let medID = localStorage.getItem('idForMedicalCenter');
        let medicalCenterId = parseInt(medID||"-1")
        return this.http.get("http://localhost:8080/api/users/appointments-taken/" + id + "/" + medicalCenterId , {headers: this.reqHeader});
    }

    
}