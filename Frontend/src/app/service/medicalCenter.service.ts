import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppointmentDTO } from "../systemadmin-utils/AppointmentDTO";

@Injectable({
    providedIn: 'root'
})

export class MedicalCenterService {
    constructor(private http: HttpClient){ }

    reqHeader = new HttpHeaders().set('Content-Type', 'application/json')
                                   .set('Accept', 'application/json');

    public getMedicalCenters(): Observable<any> {
        this.reqHeader = this.getHeaders();
        return this.http.get("http://localhost:8080/api/centers" + "/", {headers: this.reqHeader});
    }

    public getMedicalCenterById(id: any): Observable<any> {
        this.reqHeader = this.getHeaders();
        return this.http.get("http://localhost:8080/api/centers" + "/"+id, {headers: this.reqHeader});
    }

    public createFreeApointment(dto: AppointmentDTO): Observable<any>{
        this.reqHeader = this.getHeaders();
        console.log("salje se na back")
        return this.http.post("http://localhost:8080/api/centers/createfreeappointment", dto);
    }

    // createAppointment(a:AppointmentDTO):Observable<any>{
    //     this.reqHeader = this.getHeaders();
    //     return this.http.post('http://localhost:8080/api/centers'+'/defineAppointment', a, {headers: this.reqHeader});
    //   }

    
    public getMedicalCenterStoreById(id: any): Observable<any> {
        this.reqHeader = this.getHeaders();
        return this.http.get("http://localhost:8080/api/centers/bloodstore" + "/"+id, {headers: this.reqHeader});
    }

    public viewSchedule():Observable<AppointmentDTO[]>{
        this.reqHeader = this.getHeaders();
        return this.http.get<AppointmentDTO[]>("http://localhost:8080/api/centers/freeappointments/" + "1", {headers: this.reqHeader})
      }

    public updateCenter(obj:any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.put("http://localhost:8080/api/centers/", obj, {headers: this.reqHeader});
    }

    public getMedicalCenterDTOById(id: any): Observable<any> {
        this.reqHeader = this.getHeaders();
        return this.http.get("http://localhost:8080/api/centers/dto" + "/"+id, {headers: this.reqHeader});
    }

    public getMedicalCenterWithAppointments(startTime: any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.get("http://localhost:8080/api/centers/freeAppointments"+ '?startTime=' + startTime,  {headers: this.reqHeader});
    }

    getHeaders() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
        });
        return headers;
    }

}