import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class MedicalCenterService {
    constructor(private http: HttpClient){ }

    public getMedicalCenters(): Observable<any> {
        return this.http.get("http://localhost:8080/api/centers" + "/");
    }

    public getMedicalCenterById(id: any): Observable<any> {
        return this.http.get("http://localhost:8080/api/centers" + "/"+id);
    }

    public updateCenter(obj:any): Observable<any>{
        return this.http.put("http://localhost:8080/api/centers/", obj);
    }
}