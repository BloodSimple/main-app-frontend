import { Component, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/model/address';
import { GradeCenter } from 'src/app/model/gradeCenter';
import { MedicalCenterModel } from 'src/app/model/medicalCenter';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-centers',
  templateUrl: './medical-centers.component.html',
  styleUrls: ['./medical-centers.component.css'],
})
export class MedicalCentersComponent implements OnInit {
  name: string = '';
  description: string = '';

  medicalCenter = new MedicalCenterModel();
  medicalCenters: MedicalCenterModel[] = [];

  medicalGrade = new GradeCenter();
  medicalGrades: GradeCenter[] = [];

  isUserLoged = false;
  isUserRoleUser = false;
  selectedNumber = 1;

  address = new AddressModel();

  searchText: any = '';
  selected: number = 0;

  constructor(private medicalCenterService: MedicalCenterService, private autoService: AuthenticationService,
    private router: Router) {
      this.isUserLoged = autoService.loggedIn()
      this.isUserRoleUser = autoService.userAccess()
  }

  ngOnInit(): void {
    this.isUserLoged = this.autoService.loggedIn()
      this.isUserRoleUser = this.autoService.userAccess()
    // this.medicalCenterService
    //   .getMedicalCenters()
    //   .subscribe((medicalCenters: MedicalCenterModel[]) => {
        
        
    //     this.medicalCenters = medicalCenters;


    //     console.log(this.medicalCenters);
    //   });
  //     this.medicalCenterService.getMedicalCenters()
  //     .subscribe(
  //   (medicalCenters: MedicalCenterModel[]) => {
  //     this.medicalCenters = medicalCenters;
  //     console.log(this.medicalCenters);
  //   },
  //   (error: any) => {
  //     this.inits();
  //     // console.error('An error occurred:', error);
  //   }
  // );
  
  if(this.isUserLoged){
  this.medicalCenterService.getCentersWithGrades().subscribe(response =>{
      console.log(JSON.stringify(response));
      this.medicalGrades = response;
  //     for(Object o of response)
  //     {

  //     }
  } );
  }
  else{

         this.medicalCenterService.getMedicalCenters()
      .subscribe(
    (medicalCenters: MedicalCenterModel[]) => {
      this.medicalCenters = medicalCenters;
      console.log(this.medicalCenters);
    },
    (error: any) => {
      this.inits();
      console.error('An error occurred:', error);
    }
  );

  }
  
  }

  onSelect() {
    this.medicalCenters = this.medicalCenters.filter(
      (item: any) => item.grade == this.selected
    );
    console.log(this.selected);
  }

  reset() {
    this.selected = 0;
    this.searchText = '';
    this.medicalCenterService.getMedicalCenters()
      .subscribe(
    (medicalCenters: MedicalCenterModel[]) => {
      this.medicalCenters = medicalCenters;
      console.log(this.medicalCenters);
    },
    (error: any) => {
      this.inits();
      // console.error('An error occurred:', error);
    }
  );
  }
  sortByRatingAsc() {
    this.medicalGrades.sort((a, b) => {
      return b.grade - a.grade;
    });
  }
  sortByRatingDesc() {
    this.medicalCenters.sort((a, b) => {
      return a.grade - b.grade;
    });
  }
  sortByNameAsc() {
    this.medicalCenters.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
  sortByNameDesc() {
    this.medicalCenters.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }
  sortByCityAsc() {
    this.medicalCenters.sort((a, b) => {
      return b.address.city.localeCompare(a.address.city);
    });
  }
  sortByCityDesc() {
    this.medicalCenters.sort((a, b) => {
      return a.address.city.localeCompare(b.address.city);
    });
  }

  addGrade(centerId:any)
  {
      this.medicalCenterService.addGrade(centerId, this.selectedNumber).subscribe(response => {
        if(response)
        {
          this.router.navigate(['/medical-centers']);
        }
      })
  }

  inits()
  {
    
  // medicalCenter = new MedicalCenterModel();
    let mcs: MedicalCenterModel[] = [];
    let medicalCenter1 = new MedicalCenterModel();
    medicalCenter1.id = '1';
    medicalCenter1.name ='Blood Drop';
    let address1 = new AddressModel();
    address1.id = '2';
    address1.street = 'Narodnog heroja';
    address1.number = '32';
    address1.city = 'Novi Sad';
    address1.country = 'Srbija';
    medicalCenter1.address = address1;
    medicalCenter1.description = 'Vadimo krv kap po kap, kisa sprema se... ok prestacu';
    medicalCenter1.grade = 0;

    let medicalCenter2 = new MedicalCenterModel();
    medicalCenter2.id = '1';
    medicalCenter2.name ='Klinicki Centar Lab - KCL';
    let address2 = new AddressModel();
    address2.id = '1';
    address2.street = 'Scepina ulica';
    address2.number = 'a2';
    address2.city = 'Smederevo';
    address2.country = 'Srbija';
    medicalCenter2.address = address2;
    medicalCenter2.description = 'Dosta smo dobar centar za vadjenje krvi, za to smo top';
    medicalCenter2.grade = 4;

    let medicalCenter3 = new MedicalCenterModel();
    medicalCenter3.id = '3';
    medicalCenter3.name ='Medicinski centar Zdravlje';
    let address3 = new AddressModel();
    address3.id = '7';
    address3.street = 'Resavska';
    address3.number = '3';
    address3.city = 'Novi Sad';
    address3.country = 'Srbija';
    medicalCenter3.address = address3;
    medicalCenter3.description = 'Najbolji u gradu!';
    medicalCenter3.grade = 5;
    
    this.medicalCenters = [];
    this.medicalCenters.push(medicalCenter1);
    this.medicalCenters.push(medicalCenter2);
    this.medicalCenters.push(medicalCenter3);

    let medicalGrade1 = new GradeCenter();
    medicalGrade1.center = medicalCenter1;
    medicalGrade1.center.grade = 2
    
    let medicalGrade2 = new GradeCenter();
    medicalGrade2.center = medicalCenter2;
    medicalGrade2.center.grade = 5
    
    let medicalGrade3 = new GradeCenter();
    medicalGrade3.center = medicalCenter3;
    medicalGrade3.center.grade = 5
    
    this.medicalGrades = []
    this.medicalGrades.push(medicalGrade1);
    this.medicalGrades.push(medicalGrade2);
    this.medicalGrades.push(medicalGrade3);

  }

  searchCenters() {
    // this.medicalCenters = this.medicalCenters.filter(
    //   (el) =>
    //     (el.address.street + ' ' + el.address.number)
    //       .toLowerCase()
    //       .includes(this.searchText.trim().toLowerCase()) ||
    //     el.address.city
    //       ?.toLowerCase()
    //       .includes(this.searchText.trim().toLowerCase()) ||
    //     el.address.country
    //       ?.toLowerCase()
    //       .includes(this.searchText.trim().toLowerCase()) ||
    //     el.name?.toLowerCase().includes(this.searchText.trim().toLowerCase())
    // );

    this.medicalGrades = this.medicalGrades.filter(
      (el) =>
        (el.center?.address.street + ' ' + el.center?.address.number)
          .toLowerCase()
          .includes(this.searchText.trim().toLowerCase()) ||
        el.center?.address.city
          ?.toLowerCase()
          .includes(this.searchText.trim().toLowerCase()) ||
        el.center?.address.country
          ?.toLowerCase()
          .includes(this.searchText.trim().toLowerCase()) ||
        el.center?.name?.toLowerCase().includes(this.searchText.trim().toLowerCase())
    );
  }
}
