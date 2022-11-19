import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginResponse } from 'src/app/model/LoginResponse';
import { UserModel } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  personalId: string = '';
  email: string = '';
  password: string = '';
  name: string = '';
  surname: string = '';
  gender: string = '';
  phoneNumber: string = '';
  job: string = '';

  addressStreet: string = '';
  addressNumber: string = '';
  addressCity: string = '';
  addressCountry: string = '';
  bio: string = '';
  //  role: string='';

  user = new UserModel();
  activeUser: LoginResponse = new LoginResponse();

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService) {}

  ngOnInit(): void {
    console.log(this.user.personalId)
    this.activeUser = this.authenticationService.getCurrentUser();
    this.userService.getUserById(this.activeUser.personalId).subscribe((response) => {
      console.log(response);
      this.user = response;
    });
  }

  save(): void {
    this.userService.updateUser(this.user).subscribe((user: UserModel) => {
      this.user = user;
      console.log(user);
    });
  }
}
