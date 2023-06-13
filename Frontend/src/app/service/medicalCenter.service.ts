import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppointmentDTO } from "../systemadmin-utils/AppointmentDTO";
import { NewAppointmentFree } from "../pages/appointment-creation/appointment-creation.component";

@Injectable({
    providedIn: 'root'
})

export class MedicalCenterService {
    constructor(private http: HttpClient){ }

    private appointmentId = 0;
    private medicalServiceId = 0;
    

    setAppointmentId(id:any) {
        this.appointmentId = id;
        console.log("setovan appid")
        console.log(this.appointmentId)
        
     }

    getAppointmentId() {
        console.log("gettovan appid")
        console.log(this.appointmentId)
        return this.appointmentId;
    }

    setMedicalServiceId(id:any) {
        this.medicalServiceId = id;
        console.log("setovan mcid")
        console.log(this.medicalServiceId)
     }

    getMedicalCenterId() {
        console.log("getovan mcid")
        console.log(this.medicalServiceId)
        return this.medicalServiceId;
    }



    reqHeader = new HttpHeaders().set('Content-Type', 'application/json')
                                   .set('Accept', 'application/json');

    public getMedicalCenters(): Observable<any> {
        this.reqHeader = this.getHeaders();
        return this.http.get("http://localhost:8080/api/centers" + "/", {headers: this.reqHeader});
    }









    public getCentersWithGrades(): Observable<any> {
        this.reqHeader = this.getHeaders();
        var lsUser = localStorage.getItem('currentUser');
            // var loadedRole = lsUser?.role;
        const object = JSON.parse(lsUser || ' ');
        return this.http.get("http://localhost:8080/api/centers/withGrades/" + object.email, {headers: this.reqHeader});
    }




    public addGrade(centerId:any, selectedNumber:any): Observable<any>
    {
        this.reqHeader = this.getHeaders();

        var lsUser = localStorage.getItem('currentUser');
            // var loadedRole = lsUser?.role;
        const object = JSON.parse(lsUser || ' ');

        const myObject = {
            mail: object.email,
            centerId: ""+centerId,
            grade: ""+selectedNumber
          };

        return this.http.put("http://localhost:8080/api/centers/addGrade", myObject, {headers: this.reqHeader});
    }








    public getMedicalCenterById(id: any): Observable<any> {
        this.reqHeader = this.getHeaders();
        return this.http.get("http://localhost:8080/api/centers" + "/"+id, {headers: this.reqHeader});
    }

    public getCenterMedWorks(mail:String): Observable<any>{
        this.reqHeader = this.getHeaders();

        return this.http.put("http://localhost:8080/api/centers/getCenterMedWorks", mail, {headers: this.reqHeader});
    }

    public createFreeApointment(dto: NewAppointmentFree): Observable<any>{
        this.reqHeader = this.getHeaders();
        console.log("salje se na back")
        return this.http.post("http://localhost:8080/api/centers/create-appointment-free", dto,{headers: this.reqHeader});
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
        let medID = localStorage.getItem('idForMedicalCenter');
        let medicalCenterId = parseInt(medID||"-1")
        return this.http.get<AppointmentDTO[]>("http://localhost:8080/api/centers/freeappointments/" + medicalCenterId, {headers: this.reqHeader})
      }

    public updateCenter(obj:any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.put("http://localhost:8080/api/centers/", obj, {headers: this.reqHeader});
    }




    
    public appointmentConditionCheck(obj:any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.put("http://localhost:8080/api/reports/appointment-condition-check", obj, {responseType: 'text',headers: this.reqHeader});
    }


    public updateAppointmentReport(obj:any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.put("http://localhost:8080/api/reports/create-report", obj, {responseType: 'text',headers: this.reqHeader});
    }

    public userMissAppointmentReport(obj:any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.put("http://localhost:8080/api/reports/user-miss-appointment", obj, {responseType: 'text',headers: this.reqHeader});
    }

    public conditionsUnfulfilledAppointmentReport(obj:any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.put("http://localhost:8080/api/reports/appointment-condition-unfulfilled", obj, {responseType: 'text',headers: this.reqHeader});
    }





    public getMedicalCenterDTOById(id: any): Observable<any> {
        this.reqHeader = this.getHeaders();
        let medID = localStorage.getItem('idForMedicalCenter');
        let medicalCenterId = parseInt(medID||"-1")
        return this.http.get("http://localhost:8080/api/centers/dto" + "/"+medicalCenterId, {headers: this.reqHeader});
    }

    public getMedicalCenterWithAppointments(startTime: any): Observable<any>{
        this.reqHeader = this.getHeaders();
        return this.http.get("http://localhost:8080/api/centers/freeAppointments"+ '?startTime=' + startTime, {headers: this.reqHeader});
    }

    getHeaders() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
        });
        return headers;
    }

}