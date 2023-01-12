import { Component, OnInit } from '@angular/core';
import { LoginResponse } from 'src/app/model/LoginResponse';
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  activeUser: LoginResponse = new LoginResponse();

  ngOnInit(): void {
    this.activeUser = this.authenticationService.getCurrentUser()
    console.log(this.activeUser)
  }

  logout() {
    this.authenticationService.logout()
  }

}
