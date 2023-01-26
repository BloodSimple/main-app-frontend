import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  registerForm!: FormGroup;
  currentTab = 0;
  submitted = false;

  //****************************************//
  // TODO: Extract it - Registration Data:
  email: any;
  personalId: any;
  password: any;
  confirmPassword: any;
  firstName: any;
  lastName: any;
  gender: any;
  dateOfBirth: any;
  job: any;
  bio: any;
  isGenderMale: boolean = true;
  phoneNumber: any;
  role: any;
  // address:
  addressCountry: any;
  addressCity: any;
  addressStreet: any;
  addressNumber: any;
  //****************************************//

  ngOnInit(): void {
    this.showTab(this.currentTab); // Display the current tab
    this.validateRegistrationForm();
  }

  validateRegistrationForm() {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern(
              '[A-Za-z0-9._%-+]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'
            ),
          ],
        ],
        gender: [],
        dateOfBirth: [],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]+)(?=.*[!@#$%^&*()_+~-])[A-Za-zd!@#$%^&*()_+~-].{9,}'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required, Validators.minLength(10)]],
      },
      {
        validator: this.checkPasswordWithConfirmedPassword(
          'password',
          'confirmPassword'
        ),
      }
    );
  }

  checkPasswordWithConfirmedPassword(
    controlName: string,
    matchingControlName: string
  ): any {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[controlName];
      const confirmPasswordControl = formGroup.controls[matchingControlName];
      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({
          checkPasswordWithConfirmedPassword: true,
        });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }
  checkPasswordRepeatingCharacters() {
    let passString = this.password.toString();
    for (let i = 1; i < passString.length - 1; i++) {
      if (i == passString.length - 2) {
        if (
          passString.substring(i - 1, i) == passString.substring(i, i + 1) &&
          passString.substring(i, i + 1) == passString.substring(i + 1)
        )
          return true;
      } else if (
        passString.substring(i - 1, i) == passString.substring(i, i + 1) &&
        passString.substring(i, i + 1) == passString.substring(i + 1, i + 2)
      )
        return true;
    }
    return false;
  }

  checkPasswordWithEmail() {
    if (this.password.toString().includes(this.email) && this.email != '')
      return true;
    return false;
  }

  register() {
    /*
    if (this.checkPasswordRepeatingCharacters()) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid password! 🙁',
        text: 'You have too many repeating characters in a row. Please, pick another password.',
        background: '#1e2126',
        color: '#c4c4c4',
      });
      return;
    }
    if (this.checkPasswordWithEmail()) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid password! 🙁',
        text: 'Your password contains your e-mail. Please, pick another password.',
        background: '#1e2126',
        color: '#c4c4c4',
      });
    }
    this.submitted = true;
    if (this.registerForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid input fortmat.',
        text: 'Some of your inputs had invalid pattern. ',
        background: '#1e2126',
        color: '#c4c4c4',
      });
      return;
    } else {

      */
    this.dateOfBirth = this.dateOfBirth.split('T')[0];
    var person = {
      personalId: this.personalId,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      firstName: this.firstName,
      lastName: this.lastName,
      addressCountry: this.addressCountry,
      addressCity: this.addressCity,
      addressStreet: this.addressStreet,
      addressNumber: this.addressNumber,
      phoneNumber: this.phoneNumber,
      job: this.job,
      bio: this.bio,
      gender: this.isGenderMale ? 'MALE' : 'FEMALE',
      role: 'USER',
      dateOfBirth: this.dateOfBirth,
    };
    console.log(this.personalId);
    this.authenticationService.register(person).subscribe((response) => {
      if (response == "Something went wrong. Maybe a user with this email already exists.") {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong. Maybe a user with this email already exists. 😒',
          footer: 'Please, try again.',
        });
      }
    });
    Swal.fire({
      icon: 'success',
      title: 'Yippee! 🐶',
      text: this.email + ', you are successfully registrated!',
      background: '#1e2126',
      color: '#c4c4c4',
      showCancelButton: false,
      showConfirmButton: false,
      timer: 2000,
      footer: 'You will be redirected to the homepage...',
    });
    window.location.href = '/';
  }

  // TAB Functions:

  showTab(n: number) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName(
      'tab'
    ) as HTMLCollectionOf<HTMLElement>;
    x[n].style.display = 'block';
    var prevBtn = document.getElementById('prevBtn') as HTMLButtonElement;
    var nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;
    //... and fix the Previous/Next buttons:
    if (n == 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'inline';
    }
    if (n == x.length - 1) {
      nextBtn.innerHTML = 'Register';
    } else {
      nextBtn.innerHTML = 'Next';
    }
    //... and run a function that will display the correct step indicator:
    this.fixStepIndicator(n);
  }

  fixStepIndicator(n: number) {
    // This function removes the "active" class of all steps...
    var i,
      x = document.getElementsByClassName('step');
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(' active', '');
    }
    //... and adds the "active" class on the current step:
    x[n].className += ' active';
  }

  nextPrev(n: number) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName('tab');
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !this.validateForm()) return;
    // Hide the current tab:
    var prevTab = x[this.currentTab] as HTMLElement;
    prevTab.style.display = 'none';
    // Increase or decrease the current tab by 1:
    this.currentTab = this.currentTab + n;
    // if you have reached the end of the form...
    if (this.currentTab >= x.length) {
      // ... the form gets submitted:
      var regForm = document.getElementById('regForm') as HTMLFormElement;
      //regForm.submit();
      this.register();
      return;
    }
    // Otherwise, display the correct tab:
    this.showTab(this.currentTab);
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
