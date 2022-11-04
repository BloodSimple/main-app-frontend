import { Component, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/model/address';
import { UserModel } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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
//  bio: string='';
//  role: string='';

  user= new UserModel();
  address = new AddressModel();

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUserById("2310987760011").subscribe((response)  => {
      console.log(response);
      this.user = response;
      this.address = response.address;
      console.log(this.user);
  });
  }

  save(): void {

    this.userService.updateUser(this.user).subscribe((user: UserModel) =>{      
          this.user = user;    
          console.log(user);

    });
  }
}
