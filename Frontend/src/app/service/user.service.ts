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

    public updateUser(obj:any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.put("http://localhost:8080/api/users/", obj, {headers: this.reqHeader});
    }

    public getUserByPersonalId(id: String): Observable<any> {
        this.reqHeader = this.getHeaders();
        return this.http.get("http://localhost:8080/api/users" + "/" + id, {headers: this.reqHeader});
    }

    public updatePassword(obj:any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.put("http://localhost:8080/api/users/updatepassword", obj, {headers: this.reqHeader});
    }

    public scheduleAppointment(medicalCenterId: any, startTime: any, personalId: any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.post("http://localhost:8080/api/centers/scheduleAppointment" + "/"+ medicalCenterId+"/"+startTime+"/"+personalId, {headers: this.reqHeader});
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
}