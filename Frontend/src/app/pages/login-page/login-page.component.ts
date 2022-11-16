import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor() {}

  currentTab = 0;

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
