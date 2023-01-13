import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IResponse } from '../model/authentication/IResponse';
import { AuthenticationService } from './authentication.service';


@Injectable({
    providedIn: 'root',
  })
  export class DonationFormService {

    constructor(private _http: HttpClient,
                private _authenticationSerivce: AuthenticationService
        ) {}


    saveDonationForm(donationForm: any){
        console.log(' -- Save Donation Form...');
        return this._http.post<IResponse>('http://localhost:8080/api/donationForm',donationForm, 
          {headers: this._authenticationSerivce.getHeaders()}
        );
    }



    
  }