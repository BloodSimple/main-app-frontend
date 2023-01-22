import { Component, OnInit } from '@angular/core';
import { LoginResponse } from 'src/app/model/LoginResponse';
import { UserModel } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-blood-donation-page',
  templateUrl: './blood-donation-page.component.html',
  styleUrls: ['./blood-donation-page.component.css'],
})
export class BloodDonationPageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {}

  activeUser: LoginResponse = new LoginResponse();
  user: UserModel = new UserModel();

  ngOnInit(): void {
    this.activeUser = this.authenticationService.getCurrentUser();
    this.userService.getUserByPersonalId(this.activeUser.personalId).subscribe((response: any) => {
        this.user = response
    }, (err) => { }); 
  
    console.log(this.user)
  
  
  }
}
