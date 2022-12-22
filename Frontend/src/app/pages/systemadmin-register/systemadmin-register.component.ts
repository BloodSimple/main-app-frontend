import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressDTO } from 'src/app/systemadmin-utils/AddressDTO';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { UserDTO } from 'src/app/systemadmin-utils/UserDTO';

@Component({
  selector: 'app-systemadmin-register',
  templateUrl: './systemadmin-register.component.html',
  styleUrls: ['./systemadmin-register.component.css']
})
export class SystemadminRegisterComponent implements OnInit {

  public userAddress$ = new AddressDTO('', '', '', '', 0, 0)
  public adminMock$ = new UserDTO('', '', '', '', '', '', this.userAddress$, '', '', '', '', true)
  public gender = 'FEMALE'

  constructor(public service:SystemadminServiceService,
    public  router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.adminMock$.role = 'SYSTEM_ADMIN'
    this.adminMock$.gender = this.gender
   
    this.service.registerSystemAdmin(this.adminMock$).subscribe(
      res=>{        
        //this.router.navigate(['/sysadmin']);
      }, err => {   console.log(err);
    }      
    );
    this.router.navigate(['/sysadmin']);
  }
}
