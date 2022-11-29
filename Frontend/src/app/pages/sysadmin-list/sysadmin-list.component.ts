import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { UserDTO } from 'src/app/systemadmin-utils/UserDTO';
import { UserSearchDTO } from 'src/app/systemadmin-utils/UserSearchDTO';

@Component({
  selector: 'app-sysadmin-list',
  templateUrl: './sysadmin-list.component.html',
  styleUrls: ['./sysadmin-list.component.css']
})
export class SysadminListComponent implements OnInit {

  public admins$: UserDTO[]=[]
  public search$: UserSearchDTO[] = []
  searchText!: string;
  term = '';
  filterTerm!: string;
  filterTerm2!:string;
  constructor(
    public service:SystemadminServiceService,
    public router :Router


  ) { }

  ngOnInit(): void {
    this.service.allAdmins().subscribe(data=>
      this.admins$=data)
  }

  fillSearch():void{
    if(this.search$.length == 0){
    this.admins$.forEach((u) => {
      this.search$.push( new UserSearchDTO(u));
      console.log(u)
      
    })};
  }
save(u:UserDTO){
  this.service.updateUser(u).subscribe((response:String) =>{      
    console.log(response);

});
}
}

