import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ChangePasswordDto } from 'src/app/model/ChangePasswordDto';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.css']
})
export class FirstLoginComponent implements OnInit {

  dto = new ChangePasswordDto();

  currentpassword: string = '';
  newpassword: string = '';
  repeatedpassword: string = '';
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  savePassword(): void {
    this.dto.currentpassword = this.currentpassword;
    this.dto.newpassword = this.newpassword;
    this.dto.repeatedpassword = this.repeatedpassword;
    this.userService.updatePassword(this.dto).subscribe((response: String) => {
      console.log(response);
    });
  }

}
