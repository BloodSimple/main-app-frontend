import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  
   public centers$ : MedicalCenterDTO[] = []
  public users$: UserDTO[]=[]
  public search$: UserSearchDTO[] = []
  constructor(
    public service:SystemadminServiceService,
    public  router: Router
  ) { }

  ngOnInit(): void {
    this.service.viewCenters().subscribe(data=>
     this.centers$=data)
    this.service.allUsers().subscribe(data=>
      this.users$=data)
    
  }
  fillSearch():void{
    if(this.search$.length == 0){
    this.users$.forEach((u) => {
      this.search$.push( new UserSearchDTO(u));
      console.log(u)
      
    })};
  }
  search(){
    this.router.navigate(['/search_users'])
  }
  newCenter(){
    this.router.navigate(['/new_center'])
  }
}
