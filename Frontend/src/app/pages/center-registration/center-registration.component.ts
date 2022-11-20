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
  public admin$ = new UserDTO('0','','','','','',this.userAddress$,'','','','')
  //public admin$ : UserDTO|undefined
  public center$ = new MedicalCenterDTO( [], '', this.centerAddress$, '', [])
  public existingAdmins$ : UserDTO[] = []
  public existing : boolean = true
  public adminMock$ = new UserDTO('', '', '', '', '', '', this.userAddress$, '', '', '', '')
 public gender = 'FEMALE'
 public center_added = false
  constructor(
    public service:SystemadminServiceService,
    public  router: Router

  ) { }

  ngOnInit(): void {
    
     this.service.admins().subscribe(data=>
     this.existingAdmins$=data)
     
  }

  setAdmin(admin: UserDTO):void{
    this.admin$ = admin
    console.log(this.admin$)

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
  createCenter():void{
    if(this.admin$.personalId!='0'){
    this.center$.admin.push(this.admin$)
    this.service.putAdmin(this.center$.name, this.admin$).subscribe(
      res=>{        
        //this.router.navigate(['/sysadmin']);
      }, err => {   console.log(err);
    }      
    );
  }
    
    this.center$.address = this.centerAddress$;
    this.service.registerCenter(this.center$).subscribe(
      res=>{        
        //this.router.navigate(['/sysadmin']);
      }, err => {   console.log(err);
    }
    
    );
    this.center_added=true
    if (this.admin$.personalId != '0'){
      this.router.navigate(['/sysadmin']);
    }
  }
  assignAdmin():void{
    this.adminMock$.role = 'MEDICAL_ADMIN'
    this.adminMock$.gender = this.gender
    this.admin$ = this.adminMock$
    this.center$.admin.push(this.admin$)
    this.service.putAdmin(this.center$.name, this.admin$).subscribe(
      res=>{        
        //this.router.navigate(['/sysadmin']);
      }, err => {   console.log(err);
    }      
    );
    this.router.navigate(['/sysadmin']);

  }
}
