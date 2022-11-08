import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressDTO } from 'src/app/systemadmin-utils/AddressDTO';
import { MedicalCenterDTO } from 'src/app/systemadmin-utils/MedicalCenterDTO';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { UserDTO } from 'src/app/systemadmin-utils/UserDTO';

@Component({
  selector: 'app-center-registration',
  templateUrl: './center-registration.component.html',
  styleUrls: ['./center-registration.component.css']
})
export class CenterRegistrationComponent implements OnInit {

  public centers$ : MedicalCenterDTO[] = []
  public userAddress$ = new AddressDTO('', '', '', '', 0, 0)
  public centerAddress$ = new AddressDTO('', '', '', '', 0, 0)
  public admin$ : UserDTO | undefined
  public center$ = new MedicalCenterDTO( [], '', this.centerAddress$, '')
  public existingAdmins$ : UserDTO[] = []
  public existing : boolean = true

  constructor(
    public service:SystemadminServiceService,
    public  router: Router

  ) { }

  ngOnInit(): void {
    
     this.service.admins().subscribe(data=>
      this.existingAdmins$=data)
     
  }

  setAdmin(admin: UserDTO):void{
    this.center$.admin = admin
  }

  onSubmit():void{
    this.center$.address = this.centerAddress$;
    
    this.service.registerCenter(this.center$).subscribe(
      res=>{        
        this.router.navigate(['/sysadmin']);
      }, err => {   console.log(err);
    }
      
    );
   
  }

  newCenter(){
    this.router.navigate(['/new_center'])
  }

  existingFalse():void{
    this.existing = false
  }
  existingTrue():void{
    this.existing = true
  }
}
