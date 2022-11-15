import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  currentTab = 0;

  ngOnInit(): void {
    this.showTab(this.currentTab); // Display the current tab
  }

  showTab(n: number) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab") as HTMLCollectionOf<HTMLElement>;
    x[n].style.display = "block";

  }

}
