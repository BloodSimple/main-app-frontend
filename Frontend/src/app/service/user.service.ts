import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../model/authentication/IResponse';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:8080/api/';

  constructor(
    private http: HttpClient,
    private _authenticationService: AuthenticationService
  ) {}

  public updateUser(obj: any): Observable<any> {
    const headers = this._authenticationService.getHeaders();
    return this.http.put<any>('http://localhost:8080/api/users/', obj, {
      headers: headers,
    });
  }

  public getUserByPersonalId(id: String): Observable<any> {
    const headers = this._authenticationService.getHeaders();
    return this.http.get('http://localhost:8080/api/users' + '/' + id, {
      headers: headers,
    });
  }

  public updatePassword(obj: any): Observable<any> {
    const headers = this._authenticationService.getHeaders();

    return this.http.put(
      'http://localhost:8080/api/users/updatepassword',
      obj,
      { headers: headers }
    );
  }

  public scheduleAppointment(
    medicalCenterId: any,
    startTime: any,
    personalId: any
  ): Observable<any> {
    const appointment = {
      medicalCenterId: medicalCenterId,
      startTime: startTime,
      personalId: personalId,
    };
    return this.http.post<IResponse>(
      'http://localhost:8080/api/centers/scheduleAppointment',
      appointment,
      { headers: this._authenticationService.getHeaders() }
    );
  }

  public cancelAppointment(obj: any): Observable<any> {
    const headers = this._authenticationService.getHeaders();
    return this.http.post<any>(
      'http://localhost:8080/api/centers/cancelAppointment',
      obj,
      { headers: headers }
    );
  }

  public getAppointmentsByUser(id: any): Observable<any> {
    const headers = this._authenticationService.getHeaders();
    return this.http.get<any>(
      'http://localhost:8080/api/centers/myAppointments' + '/' + id,
      { headers: headers }
    );
  }
}
