import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/model/user';
import { ChangePasswordDto } from 'src/app/model/ChangePasswordDto';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-medical-admin-profile',
  templateUrl: './medical-admin-profile.component.html',
  styleUrls: ['./medical-admin-profile.component.css']
})
export class MedicalAdminProfileComponent implements OnInit {

  id: string = '';
  email: string = '';
  password: string = '';
  name: string = '';
  surname: string = '';
  gender: string = '';
  phoneNumber: string='';
  job: string='';

  addressStreet: string = '';
  addressNumber: string = '';
  addressCity: string = '';
  addressCountry: string = '';
  bio: string='';
  currentpassword: string=''; 
  newpassword: string=''; 
  repeatedpassword: string=''; 
//  role: string='';

  user= new UserModel();
  dto = new ChangePasswordDto();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById("743199760011").subscribe((response)  => {
      console.log(response);
      this.user = response;
      this.dto.id = this.user.personalId;
  });
  }

  save(): void {

    this.userService.updateUser(this.user).subscribe((user: UserModel) =>{      
          this.user = user;
          this.dto.id = this.user.personalId;
          console.log(user);
          alert("User uppdated.")
    });
  }

  savePassword(): void {
    this.dto.currentpassword = this.currentpassword;
    this.dto.newpassword = this.newpassword;
    this.dto.repeatedpassword = this.repeatedpassword;
      this.userService.updatePassword(this.dto).subscribe((response:String) =>{      
        console.log(response);

    });
  }

}
