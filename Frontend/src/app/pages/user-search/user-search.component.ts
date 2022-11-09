import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    public service:SystemadminServiceService,
    public router :Router


  ) { }

  ngOnInit(): void {
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

}
