import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AddressDTO } from 'src/app/systemadmin-utils/AddressDTO';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { UserDTO } from 'src/app/systemadmin-utils/UserDTO';
import { UserSearchDTO } from 'src/app/systemadmin-utils/UserSearchDTO';
import { DonateBloodUserDTO } from 'src/app/model/DonateBloodUserDto';

@Component({
  selector: 'app-center-users',
  templateUrl: './center-users.component.html',
  styleUrls: ['./center-users.component.css']
})
export class CenterUsersComponent implements OnInit {

  // public users$: UserDTO[]=[]
  // public sortedUsers$: UserDTO[]=[]DonateBloodUserDTO
  
  public users$: DonateBloodUserDTO[]=[]
  public sortedUsers$: DonateBloodUserDTO[]=[]


  public search$: UserSearchDTO[] = [] //TODO: change to UserSearchDTO
  public direction = "asc";
  searchText!: string;
  term = '';
  filterTerm!: string;
  filterTerm2!:string;
  displayStyle = "none";
  userHistory : any;

  public foundUsers: any;
  constructor(
    public service:SystemadminServiceService,
    public router :Router,
    public userService: UserService

  ) { }

  ngOnInit(): void {
    // this.service.allUsers().subscribe(data=>
    //   this.users$=data)

      // this.users$.push(new UserDTO("1","test1","testpass","testime","Testprez","gen",
      // new AddressDTO("aaa","11","Beograd","asd",10,10),"abc","posao1","bio1","rola"))
      // this.users$.push(new UserDTO("2","test2","testpass2","pera","peric","gen2",
      // new AddressDTO("bbb","22","Negotin","asd",10,10),"htr","posao4","bio1","rola"))
      // this.users$.push(new UserDTO("3","test3","maki","makic","asda","gasden",
      // new AddressDTO("ccc","33","Paracin","asd",10,10),"trh","posao3","bio3","rola3"))
      
      // this.sortedUsers$.push(new UserDTO("1","test1","testpass","testime","Testprez","gen",
      // new AddressDTO("aaa","11","Beograd","asd",10,10),"abc","posao1","bio1","rola"))
      // this.sortedUsers$.push(new UserDTO("2","test2","testpass2","pera","peric","gen2",
      // new AddressDTO("bbb","22","Negotin","asd",10,10),"htr","posao4","bio1","rola"))
      // this.sortedUsers$.push(new UserDTO("3","test3","maki","makic","asda","gasden",
      // new AddressDTO("ccc","33","Paracin","asd",10,10),"thr","posao3","bio3","rola3"))


      // this.foundUsers = [{"id":1,"name":"Dusan","lastName":"Markovic","personalId":"2310999760011","address":"Novi Sad Mise Dimitrijevica 25","phoneNumber":"0641123456","job":"engineer","latestBloodDonation":"2023-01-29T08:00","email":"mail1"},{"id":2,"name":"Branimir","lastName":"Nestorovic","personalId":"1212199760011","address":"Beograd Gospodara Vucica 2B","phoneNumber":"0641123456","job":"dr","latestBloodDonation":"2023-01-30T08:00", "email":"mail2"}];
        
      // for (const user of this.foundUsers) {
      //     // console.log(user.name);
      //     this.users$.push(new DonateBloodUserDTO(user.id,user.name,user.lastName,user.personalId,user.address,user.phoneNumber,user.job,
      //       user.latestBloodDonation,user.email))
      //     this.sortedUsers$.push(new DonateBloodUserDTO(user.id,user.name,user.lastName,user.personalId,user.address,user.phoneNumber,user.job,
      //         user.latestBloodDonation,user.email))
      // }

      this.userService.getUserWithDonatedBlood(1).subscribe((response)  => {

        console.log(response);
        console.log(JSON.stringify(response));
        // this.foundUsers = [{"id":1,"name":"Dusan","lastName":"Markovic","personalId":"2310999760011","address":"Novi Sad Mise Dimitrijevica 25","phoneNumber":"0641123456","job":"engineer","latestBloodDonation":"2023-01-29T08:00","email":"mail1"},{"id":2,"name":"Branimir","lastName":"Nestorovic","personalId":"1212199760011","address":"Beograd Gospodara Vucica 2B","phoneNumber":"0641123456","job":"dr","latestBloodDonation":"2023-01-30T08:00", "email":"mail2"}];
        
        for (const user of response) {
          // console.log(user.name);
          this.users$.push(new DonateBloodUserDTO(user.id,user.name,user.lastName,user.personalId,user.address,user.phoneNumber,user.job,
            user.latestBloodDonation,user.email))
          this.sortedUsers$.push(new DonateBloodUserDTO(user.id,user.name,user.lastName,user.personalId,user.address,user.phoneNumber,user.job,
              user.latestBloodDonation,user.email))
            
        }
        
        // this.users$ = response;
        // this.foundUsers = response;
        //ovo radi, vraca listu sa objektima
        // [{"id":1,"name":"Dusan","lastName":"Markovic","personalId":"2310999760011","address":"Novi Sad Mise Dimitrijevica 25","phoneNumber":"0641123456","job":"engineer","latestBloodDonation":"2023-01-29T08:00"},{"id":2,"name":"Branimir","lastName":"Nestorovic","personalId":"1212199760011","address":"Beograd Gospodara Vucica 2B","phoneNumber":"0641123456","job":"dr","latestBloodDonation":"2023-01-30T08:00"}]
        // this.medicalCenter = response;
        
    });
      
  }

  fillSearch():void{
    // if(this.search$.length == 0){
    // this.users$.forEach((u) => {
    //   this.search$.push( new UserSearchDTO(u));
    //   console.log(u)
      
    // })};
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
    // console.log(JSON.stringify(sortedArray))

  // return sortedArray;
  this.sortedUsers$ = sortedArray
}

openPopup(id: any) {
  this.displayStyle = "block";

  this.userHistory = [];
  // this.userHistory = [{"status":"finished","date":"nekidate1","bloodAmount":"400"},{"status":"finished","date":"nekidate2","bloodAmount":"600"},
  // {"status":"miss","date":"nekidate3","bloodAmount":"0"},{"status":"conUnful","date":"nekidate4","bloodAmount":"0"}];
  //get data from back about user, take mcId from local storage

  this.userService.getAppointmentHistory(id).subscribe((response)  => {

    // console.log("USLO JE U 1");
    for(const obj of response)
    {
        this.userHistory.push({"status":obj.appointment.status,"date":obj.appointment.startTime,"bloodAmount":obj.report?.bloodAmount})
    };
    console.log(JSON.stringify(response));
  });
  // this.userHistory.push()
}

closePopup() {
  this.displayStyle = "none";
}

}
