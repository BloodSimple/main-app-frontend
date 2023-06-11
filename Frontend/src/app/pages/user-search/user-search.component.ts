import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AddressDTO } from 'src/app/systemadmin-utils/AddressDTO';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { UserDTO } from 'src/app/systemadmin-utils/UserDTO';
import { UserSearchDTO } from 'src/app/systemadmin-utils/UserSearchDTO';

@Component({
  selector: '.app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  public users$: UserDTO[]=[]
  public search$: UserSearchDTO[] = []
  searchText!: string;
  term = '';
  filterTerm!: string;
  filterTerm2!:string;
  displayStyle = "none";
  takenAppointments : any;

  constructor(
    public service:SystemadminServiceService,
    public router :Router,
    public userService: UserService


  ) { }

  ngOnInit(): void {
    this.service.allRegUsers().subscribe(data=>{

      for(const d of data)
      {
          let u = new UserDTO(d.personalId,d.email,d.password,d.name,d.surname,
            d.gender,new AddressDTO(" "," "," "," ",0,0),d.phoneNumber,d.job,
            d.bio,d.role)
            u.id = d.id;
          this.users$.push(u);
          // console.log(JSON.stringify(data))
      }
      // console.log(JSON.stringify(this.users$))
      this.fillSearch()
    });
      // this.users$=data)
      
  
  }

  fillSearch():void{
    if(this.search$.length == 0){
    this.users$.forEach((u) => {
      let s = new UserSearchDTO(u)
      s.id = u.id;
      this.search$.push( s );
      console.log(u)
      
    })};
  }


  openPopup(id: any) {
    this.displayStyle = "block";
    // console.log("ID je :");
    // console.log(id);
    this.takenAppointments = [];
    // this.userHistory = [{"status":"finished","date":"nekidate1","bloodAmount":"400"},{"status":"finished","date":"nekidate2","bloodAmount":"600"},
    // {"status":"miss","date":"nekidate3","bloodAmount":"0"},{"status":"conUnful","date":"nekidate4","bloodAmount":"0"}];
    //get data from back about user, take mcId from local storage
  
    this.userService.getUserTakenAppointment(id).subscribe((response)  => {
  
      console.log("USLO JE U 2");
      // console.log(response);
      for(const obj of response)
      {
           this.takenAppointments.push({"status":obj.status,"date":obj.startTime,"appId":obj.id})
        // console.log(obj);
    //       this.userHistory.push({"status":obj.appointment.status,"date":obj.appointment.startTime,"bloodAmount":obj.report?.bloodAmount})
      };
      console.log(JSON.stringify(this.takenAppointments));
    });
    // this.userHistory.push()
  }
  
  closePopup() {
    this.displayStyle = "none";
  }

  startAppointment(id: any)
  {
    //add id to local storage
    localStorage.setItem('idForStartAppointment', id);
    this.router.navigate(['/appointment-report']);
  }
}
