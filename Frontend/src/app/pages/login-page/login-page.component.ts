import { Component, OnInit } from '@angular/core';
import { LoginResponse } from 'src/app/model/LoginResponse';
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  currentTab = 0;

  email = ""
  password = ""

  ngOnInit(): void {
    this.showTab(this.currentTab); // Display the current tab
  }

  showTab(n: number) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName(
      'tab'
    ) as HTMLCollectionOf<HTMLElement>;
    x[n].style.display = 'block';
  }

  login() {
    if (this.email != '' && this.password != '') {
      this.authenticationService.logIn(this.email, this.password).subscribe( (data: any) => {
        console.log(data)
        if (data) {
          this.successfulLogin(data)  
          window.location.href = '/';
        }
      }, (err) => {
        alert(err)
      });
    } else {
      alert("Fill all fileds!")
    }

  }

  successfulLogin(loginResponse: LoginResponse) {
    this.authenticationService.loginSetUser(loginResponse);
  }

  validateForm() {
    // This function deals with validation of the form fields
    var x,
      y,
      i,
      valid = true;
    x = document.getElementsByClassName('tab');
    y = x[this.currentTab].getElementsByTagName('input');
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == '') {
        // add an "invalid" class to the field:
        y[i].className += ' invalid';
        // and set the current valid status to false
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName('step')[this.currentTab].className +=
        ' finish';
    }
    return valid; // return the valid status
  }
}
