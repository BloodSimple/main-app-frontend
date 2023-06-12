import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ILogInInfo } from '../model/authentication/ILogInfo';
import { IResponse } from '../model/authentication/IResponse';
import { LoginResponse } from '../model/LoginResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  checked: any;
  data: any;

  constructor(private _http: HttpClient) {}

  checkUsername(value: any) {
    console.log(' -- CHECKING username...');
    console.log(value);
    return this._http
      .post<any>('http://localhost:8080/user', { username: value })
      .pipe();
  }

  logIn(email: string, password: string) {
    var body = { email: email, password: password };
    return this._http
      .post<ILogInInfo>('http://localhost:8080/api/login', body)
  }

  sendPasswordRecoveryRequest(email: string): Observable<IResponse> {
    return this._http
      .post<IResponse>('http://localhost:8080/passwordRecoveryRequest', {
        email: email,
      })
      .pipe();
  }

  passwordRecovery(
    code: string,
    password: string,
    confirmPassword: string
  ): Observable<IResponse> {
    return this._http
      .post<IResponse>('http://localhost:8080/userPasswordRecovery', {
        code: code,
        password: password,
        confirmPassword: confirmPassword,
      })
      .pipe();
  }

  loggedIn() {
    return !!localStorage.getItem('jwt');
  }

  adminAccess() {
    if (this.loggedIn())
    {
      console.log("ulogovan");
    }
    var lsUser = localStorage.getItem('currentUser');
    const object = JSON.parse(lsUser || ' ');
    if (object.role == 'ADMIN') {
      console.log(" -- CHECKING admin's access: TRUE ");
      return true;
    }
    console.log(" -- CHECKING admin's access: FALSE")
    return false;
  }

  userAccess() {
    if (this.loggedIn())
    {
      console.log("ulogovan");
    }
    var lsUser = localStorage.getItem('currentUser');
    const object = JSON.parse(lsUser || ' ');
    if (object.role == 'USER') {
      console.log(" -- CHECKING user's access: TRUE ");
      return true;
    }
    console.log(" -- CHECKING user's access: FALSE ");
    return false;
  }

  medicalAdminAccess() {

    if (this.loggedIn())
    {
      console.log("ulogovan");
    }
    var lsUser = localStorage.getItem('currentUser');
    // var loadedRole = lsUser?.role;
    const object = JSON.parse(lsUser || ' ');
    console.log("ispis  user role");
    console.log(object);
    if (object.role == 'MEDICAL_ADMIN') {
      console.log(" -- CHECKING med admin's access: TRUE ");
      return true;
    }
    console.log(" -- CHECKING med admin's access: FALSE ");
    return false;
  }

  shareAdminAccess() {

    if (this.loggedIn())
    {
      console.log("ulogovan");
    }
    var lsUser = localStorage.getItem('currentUser');
    // var loadedRole = lsUser?.role;
    const object = JSON.parse(lsUser || ' ');
    console.log("ispis  user role");
    console.log(object);
    if (object.role == 'MEDICAL_ADMIN' || object.role == 'ADMIN') {
      console.log(" -- CHECKING med admin's access: TRUE ");
      return true;
    }
    console.log(" -- CHECKING med admin's access: FALSE ");
    return false;
  }

  

  register(person: any) {
    console.log(' -- Service for Registration...');
    return this._http.post<IResponse>(
      'http://localhost:8080/api/register',
      person
    );
  }

  sendPasswordlessLoginRequest(email: string): Observable<IResponse> {
    return this._http
      .post<IResponse>('http://localhost:8080/passwordlessLoginRequest', {
        email: email,
      })
      .pipe();
  }

  PasswordlessLoginRequest(code: string): Observable<ILogInInfo> {
    return this._http
      .post<ILogInInfo>('http://localhost:8080/passwordlessLogin', {
        code: code,
      })
      .pipe();
  }

  logout() {
    var user = new LoginResponse();
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = '/';
    localStorage.setItem("jwt", '');
  }

  isUserLoggedIn() {
    let user=this.getCurrentUser();
    if (user== null || user.accessToken==undefined) {
      return false;
    } else {
      return this.getCurrentUser().role !== '';
    }
  }

  getCurrentUser(): LoginResponse {
    let currentUser = localStorage.getItem('currentUser');
    if (currentUser != null) {
      return JSON.parse(localStorage.getItem('currentUser')!);
    } else {
      return new LoginResponse();
    }
  }

  getHeaders() {
    if (this.isUserLoggedIn()) {
      const userToken = localStorage.getItem('jwt');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userToken,
      };
      return headers;
    } else {
      const headers = {
        'Content-Type': 'application/json',
      };
      return headers;
    }
  }

  loginSetUser(loginResponse: LoginResponse) {
    localStorage.setItem('currentUser', JSON.stringify(loginResponse));
    localStorage.setItem("jwt", loginResponse.accessToken);
  }
}
