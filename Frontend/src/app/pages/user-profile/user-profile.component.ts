import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginResponse } from 'src/app/model/LoginResponse';
import { UserModel } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

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

  filledDonationForm: boolean = false;
  howLongAgoWasDonationFormFilled: string = '';
  donationFormDate: Date = new Date();
  //  role: string='';

  user = new UserModel();
  activeUser: LoginResponse = new LoginResponse();

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    console.log(this.user.personalId);
    this.activeUser = this.authenticationService.getCurrentUser();
    this.userService
      .getUserById(this.activeUser.personalId)
      .subscribe((response) => {
        console.log(response);
        this.user = response;
        if (response.donationForm != null) {
          this.filledDonationForm = true;
          this.donationFormDate = new Date(response.donationForm.date);
          this.howLongAgoWasDonationFormFilled = this.formatPostDates(
            this.donationFormDate.getTime()
          );
          console.log('date: ' + this.donationFormDate);
        }
      });
  }

  save(): void {
    this.userService.updateUser(this.user).subscribe((user: UserModel) => {
      this.user = user;
      console.log(user);
      Swal.fire({
        icon: 'success',
        title: 'Yippee!',
        text: 'Successfull profile update!',
        background: '#1e2126',
        color: '#c4c4c4',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }

  isRecentDate(date: Date): boolean {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    return date >= sixMonthsAgo;
  }

  formatPostDates(date: number) {
    var now = new Date().getTime();
    var seconds = Math.floor((now - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
      let num = Math.floor(interval);
      if (num <= 1) {
        return num + ' year ago';
      }
      return num + ' years ago';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      let num = Math.floor(interval);
      if (num <= 1) {
        return num + ' month ago';
      }
      return num + ' months ago';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      let num = Math.floor(interval);
      if (num <= 1) {
        return num + ' day ago';
      }
      return num + ' days ago';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      let num = Math.floor(interval);
      if (num <= 1) {
        return num + ' day ago';
      }
      return num + ' days ago';
    }
    interval = seconds / 60;
    if (interval > 1) {
      let num = Math.floor(interval);
      if (num <= 1) {
        return num + ' minute ago';
      }
      return num + ' minutes ago';
    }
    if (seconds >= 1) {
      return Math.floor(seconds) + ' seconds ago';
    } else {
      return 'just now';
    }
  }
}
