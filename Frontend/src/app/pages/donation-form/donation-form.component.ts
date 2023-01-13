import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DonationFormService } from 'src/app/service/donation.service';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {

  donationForm!: FormGroup;
  currentTab=0;
  submitted=false;
  constructor(private _donationFormSerivce: DonationFormService) { }

  q1: boolean = false;
  q2: boolean = false;
  q3: boolean = false;
  q4: boolean = false;
  q5: boolean = false;
  q6: boolean = false;
  q7: boolean = false;
  q8: boolean = false;
  q9: boolean = false;
  q10: boolean = false;
  q11: boolean = false;
  q12: boolean = false;
  q13: boolean = false;
  q14: boolean = false;
  q15: boolean = false;
  q16: boolean = false;
  q17: boolean = false;
  q18: boolean = false;
  q19: boolean = false;

  q20a: boolean = false;
  q20b: boolean = false;
  q20c: boolean = false;

  q21: boolean = false;

  q22a: boolean = false;
  q22b: boolean = false;
  q22c: boolean = false;
  q22d: boolean = false;
  q22e: boolean = false;
  q22f: boolean = false;
  q22g: boolean = false;

  q23a: boolean = false;
  q23b: boolean = false;
  q23c: boolean = false;
  q23d: boolean = false;
  q23e: boolean = false;
  q23f: boolean = false;
  
  q24: boolean = false;
  q25: boolean = false;
  q26: boolean = false;


  ngOnInit(): void {
    this.showTab(this.currentTab);
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
    nextBtn.innerHTML = 'Sumbit';
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
  console.log("tu smo", n)
  // This function will figure out which tab to display
  var x = document.getElementsByClassName('tab');
  // Exit the function if any field in the current tab is invalid:
  // if (n == 1) return;
  // Hide the current tab:
  var prevTab = x[this.currentTab] as HTMLElement;
  prevTab.style.display = 'none';
  // Increase or decrease the current tab by 1:
  this.currentTab = this.currentTab + n;
  // if you have reached the end of the form...
  if (this.currentTab >= x.length) {
    // ... the form gets submitted:
    var donationForm = document.getElementById('donationForm') as HTMLFormElement;
    this.submitDonationForm();
    return;
  }
  // Otherwise, display the correct tab:
  this.showTab(this.currentTab);
}

submitDonationForm(){
  var donationForm = {
    question1: this.q1,
    question2: this.q2,
    question3: this.q3,
    question4: this.q4,
    question5: this.q5,
    question6: this.q6,
    question7: this.q7,
    question8: this.q8,
    question9: this.q9,
    question10: this.q10,
    question11: this.q11,
    question12: this.q12,
    question13: this.q13,
    question14: this.q14,
    question15: this.q15,
    question16: this.q16,
    question17: this.q17,
    question18: this.q18,
    question19: this.q19,
    question20a: this.q20a,
    question20b: this.q20b,
    question20c: this.q20c,
    question21: this.q21,
    question22a: this.q22a,
    question22b: this.q22b,
    question22c: this.q22c,
    question22d: this.q22d,
    question22e: this.q22e,
    question22f: this.q22f,
    question22g: this.q22g,
    question23a: this.q23a,
    question23b: this.q23b,
    question23c: this.q23c,
    question23d: this.q23d,
    question23e: this.q23e,
    question23f: this.q23f,
    question24: this.q24,
    question25: this.q25,
    question26: this.q26
  };
this._donationFormSerivce.saveDonationForm(donationForm).subscribe(
  (response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  }
)

}

}
