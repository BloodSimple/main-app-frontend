import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataBinding } from '@syncfusion/ej2-angular-schedule';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';
import { AddressDTO } from 'src/app/systemadmin-utils/AddressDTO';
import { LoginRequest } from 'src/app/systemadmin-utils/LoginRequest';
import { MedicalCenterDTO } from 'src/app/systemadmin-utils/MedicalCenterDTO';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { UserDTO } from 'src/app/systemadmin-utils/UserDTO';
import { UserSearchDTO } from 'src/app/systemadmin-utils/UserSearchDTO';

@Component({
  selector: 'app-systemadmin-profile',
  templateUrl: './systemadmin-profile.component.html',
  styleUrls: ['./systemadmin-profile.component.css']
})
export class SystemadminProfileComponent implements OnInit {
  searchText!: string;
  term = '';
  filterTerm!: string;
  filterTerm2!:string;
  public first_login : boolean = false
  public userAddress$ = new AddressDTO('', '', '', '', 0, 0)
  public admin = new UserDTO('', '', '', '', '', '', this.userAddress$, '', '', '', '', true) 
  public admin$ :UserDTO|undefined
  public centers$ : MedicalCenterDTO[] = []
  public users$: UserDTO[]=[]
  public search$: UserSearchDTO[] = []
  public newPass1 :string = ''
  public newPass2 :string = ''
  public okPass = true
  constructor(
    public service:SystemadminServiceService,
    public  router: Router, 
    public auth:AuthenticationService
  ) { }

   ngOnInit():void {
    // this.service.viewCenters().subscribe(data=>
    //  this.centers$=data)
    // this.service.allUsers().subscribe(data=>
    //   this.users$=data)
    let user = this.auth.getCurrentUser()
    let email = localStorage.getItem('mail')
    if(email)
      this.service.getAdmin(email).subscribe(data=> this.first_login = data.first_login)


    if (this.admin$ != null)
      if(this.admin$.first_login === true)
        this.first_login = true;
    console.log(this.admin$)
    console.log(this.admin?.first_login)
    console.log(this.admin?.name)
    console.log(this.first_login)
    
  }


  fillSearch():void{
    if(this.search$.length == 0){
    this.users$.forEach((u) => {
      this.search$.push( new UserSearchDTO(u));
      console.log(u)
      
    })};
  }
  search(){
    this.router.navigate(['/search-users'])
  }
  newCenter(){
    this.router.navigate(['/new-center'])
  }
  registerAdmin(){
    this.router.navigate(['/register-sysadmin'])
  }
  admins(){
    this.router.navigate(['/admins'])
  }
  centers(){
    this.router.navigate(['/sysadmin-centers'])
  }
  report(){
    this.router.navigate(['/appointment-report'])
  }

  savepass(){
    if (this.newPass1 !== this.newPass2){
      this.okPass=false
    }else{
      let email = localStorage.getItem('mail')
      if(email){
        this.service.getAdmin(email).subscribe((data:UserDTO)=> {this.admin=data})
      console.log(this.admin)
      let user : UserDTO = this.admin
      console.log(user)
      let login = new LoginRequest()
      login.email = email; 
      login.password = this.newPass1
      this.service.updateUser(login).subscribe((data) =>{
        
        console.log(data)
      })
    this.auth.logout()
      this.router.navigate(['/login-page'])
  }
    }
  }
}
