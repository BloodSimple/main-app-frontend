import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ChangePasswordDto } from 'src/app/model/ChangePasswordDto';
import { Router } from '@angular/router';

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
  

  constructor(private userService: UserService,private rtr: Router) { }

  ngOnInit(): void {
  }

  savePassword(): void {
    this.dto.currentpassword = this.currentpassword;
    this.dto.newpassword = this.newpassword;
    this.dto.repeatedpassword = this.repeatedpassword;

    var lsUser = localStorage.getItem('currentUser');
    // var loadedRole = lsUser?.role;
    const object = JSON.parse(lsUser || ' ');
    // console.log("ispis  user role");
    // this.dto.id = ""+object.id;
    // console.log(JSON.stringify(this.dto));
    this.userService.getIdByMail(object.email).subscribe(response1 => {
      this.dto.id = response1;
      console.log("nadjen korisnik i id:");
      console.log(JSON.stringify(this.dto));
      this.userService.updatePassword(this.dto).subscribe((response: String) => {
        console.log(response);
        
      });
      this.rtr.navigate(["/"]);
    });
    
  }

}
