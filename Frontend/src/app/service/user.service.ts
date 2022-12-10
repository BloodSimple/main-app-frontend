import { HttpClient, HttpParams} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient){ }

    public updateUser(obj:any): Observable<any>{
        return this.http.put("http://localhost:8080/api/users/", obj);
    }

    public getUserById(id: String): Observable<any> {
        return this.http.get("http://localhost:8080/api/users" + "/" + id);
    }

    public updatePassword(obj:any): Observable<any>{
        return this.http.put("http://localhost:8080/api/users/updatepassword", obj);
    }

    public scheduleAppointment(medicalCenterId: any, startTime: any, personalId: any): Observable<any>{
        return this.http.post("http://localhost:8080/api/centers/scheduleAppointment" + "/"+ medicalCenterId+"/"+startTime+"/"+personalId, null);
    }

    public getAppointmentsByUser(id: any): Observable<any>{
        return this.http.get("http://localhost:8080/api/centers/myAppointments" + "/" + id);
    }
}