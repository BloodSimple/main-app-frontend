import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressDTO } from 'src/app/systemadmin-utils/AddressDTO';
import { MedicalCenterDTO } from 'src/app/systemadmin-utils/MedicalCenterDTO';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { UserDTO } from 'src/app/systemadmin-utils/UserDTO';

@Component({
  selector: 'app-sysadmin-center-list',
  templateUrl: './sysadmin-center-list.component.html',
  styleUrls: ['./sysadmin-center-list.component.css']
})
export class SysadminCenterListComponent implements OnInit {

  public centers$: MedicalCenterDTO[]=[]
  searchText!: string;
  term = '';
  filterTerm!: string;
  filterTerm2!:string;
  public show = false
  public centerAddress$ = new AddressDTO('', '', '', '', 0, 0)
  //public admin$ : UserDTO|undefined
  public center$ = new MedicalCenterDTO( [], '', this.centerAddress$, '', [])

  public userAddress$ = new AddressDTO('', '', '', '', 0, 0)
  public admin$ = new UserDTO('0','','','','','',this.userAddress$,'','','','')
  //public admin$ : UserDTO|undefined
  public adminMock$ = new UserDTO('', '', '', '', '', '', this.userAddress$, '', '', '', '')
 public gender = 'FEMALE'
 public center_added = false
  constructor(
    public service:SystemadminServiceService,
    public router :Router


  ) { }

  ngOnInit(): void {
    this.service.viewCenters().subscribe(data=>
      this.centers$=data)
  }

  selectedCenter(c:MedicalCenterDTO){
    this.show=true
    this.center$ = c 
    console.log(c.name)
    console.log(this.center$.name)
  }

  assignAdmin():void{
    this.adminMock$.role = 'MEDICAL_ADMIN'
    this.adminMock$.gender = this.gender
    this.admin$ = this.adminMock$
    if (!this.center$.admin){
      this.center$.admin = []
    }
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
