import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
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
      regForm.submit();
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
