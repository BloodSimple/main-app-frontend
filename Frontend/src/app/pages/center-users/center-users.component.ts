import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressDTO } from 'src/app/systemadmin-utils/AddressDTO';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { UserDTO } from 'src/app/systemadmin-utils/UserDTO';
import { UserSearchDTO } from 'src/app/systemadmin-utils/UserSearchDTO';

@Component({
  selector: 'app-center-users',
  templateUrl: './center-users.component.html',
  styleUrls: ['./center-users.component.css']
})
export class CenterUsersComponent implements OnInit {

  public users$: UserDTO[]=[]
  public sortedUsers$: UserDTO[]=[]
  public search$: UserSearchDTO[] = [] //TODO: change to UserSearchDTO
  public direction = "asc";
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

      this.users$.push(new UserDTO("1","test1","testpass","testime","Testprez","gen",
      new AddressDTO("aaa","11","Beograd","asd",10,10),"abc","posao1","bio1","rola"))
      this.users$.push(new UserDTO("2","test2","testpass2","pera","peric","gen2",
      new AddressDTO("bbb","22","Negotin","asd",10,10),"htr","posao4","bio1","rola"))
      this.users$.push(new UserDTO("3","test3","maki","makic","asda","gasden",
      new AddressDTO("ccc","33","Paracin","asd",10,10),"trh","posao3","bio3","rola3"))
      
      this.sortedUsers$.push(new UserDTO("1","test1","testpass","testime","Testprez","gen",
      new AddressDTO("aaa","11","Beograd","asd",10,10),"abc","posao1","bio1","rola"))
      this.sortedUsers$.push(new UserDTO("2","test2","testpass2","pera","peric","gen2",
      new AddressDTO("bbb","22","Negotin","asd",10,10),"htr","posao4","bio1","rola"))
      this.sortedUsers$.push(new UserDTO("3","test3","maki","makic","asda","gasden",
      new AddressDTO("ccc","33","Paracin","asd",10,10),"thr","posao3","bio3","rola3"))
      
  }

  fillSearch():void{
    if(this.search$.length == 0){
    this.users$.forEach((u) => {
      this.search$.push( new UserSearchDTO(u));
      console.log(u)
      
    })};
  }

  sortByColumn(list: any[] | undefined, column:string): any {
    console.log("nesto1")
    if(this.direction==="asc")
      this.direction = "desc";
    else 
      this.direction = "asc";
    

    console.log("direkcija je:")
    console.log(this.direction)

    // let sortedArray = (list || []).sort((a,b)=>{
    //   console.log("sortira")
    //   if(a[column] > b[column]){
    //     console.log("usao ovde 1")
    //     return (direction === 'asc') ? 1 : -1;
    //   }
    //   if(a[column] < b[column]){
    //     console.log("u 2 je")
    //     return (direction === 'desc') ? -1 : 1; //bilo desc
    //   }
    //   return 0;
    // })
    let sortedArray = (list || []).sort((a,b)=>{
      console.log("sortira")

      let valueA = a[column];
      let valueB = b[column];

      if (this.direction === 'asc')
        return valueA.localeCompare(valueB);
      else if (this.direction === 'desc')
        return valueB.localeCompare(valueA);

      // if (comparison < 0) {
      //   // console.log(`${stringA} comes before ${stringB}`);
      //   return (direction === 'asc') ? 1 : -1;
      // } else if (comparison > 0) {
      //   return (direction === 'asc') ? -1 : 1;
      //   // console.log(`${stringA} comes after ${stringB}`);
      // } else {
      //   return 0;
      // }
      // return valueA.localeCompare(valueB);

      // if(a[column] > b[column]){
      //   console.log("usao ovde 1")
      //   return (direction === 'asc') ? 1 : -1;
      // }
      // if(a[column] < b[column]){
      //   console.log("u 2 je")
      //   return (direction === 'desc') ? -1 : 1; //bilo desc
      // }
      // return 0;
    })
    console.log(JSON.stringify(sortedArray))

  // return sortedArray;
  this.sortedUsers$ = sortedArray
}

}
