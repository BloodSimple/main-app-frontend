import { Component, OnInit } from '@angular/core';
import { MedicalCenterModel } from 'src/app/model/medicalCenter';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';

@Component({
  selector: 'app-appointment-creation',
  templateUrl: './appointment-creation.component.html',
  styleUrls: ['./appointment-creation.component.css']
})
export class AppointmentCreationComponent implements OnInit {

  constructor(private medicalService: MedicalCenterService) { }

  medicalCenter = new MedicalCenterModel();
  datetime: string = '';
  medicalStuffSelection: MedicalStuffSelection[] = []; 

  ngOnInit(): void {

    this.medicalService.getMedicalCenterById(1).subscribe((response)  => {
      // console.log(response);
      console.log(JSON.stringify(response));
      this.medicalCenter = response;
      
    //   this.medicalCenter.medicalStaff.forEach(function (item:any) {  
    //     this.medicalStuffSelection.push( new MedicalStuffSelection(item.id,item.name,item.surname,item.isSelected) )
    //                                                                                                         }
    // ); 

    for (let i = 0; i < this.medicalCenter.medicalStaff.lenght ; i++) {
      
    }
    for (var mstuff of this.medicalCenter.medicalStaff) {
      this.medicalStuffSelection.push( new MedicalStuffSelection(mstuff.id,mstuff.name,mstuff.surname,false) )
    }
      
  });
  }

  createAppointment() : void {

    var medicalStuffForAppintment = []
    //proci kroz listu medical stuff i sacuvati idjeve,
    //poslati idijeve, id centra, datetime

  }

}

class MedicalStuffSelection {
  id?: string='';
  name?: string='';
  surname?: string='';
  isSelected?: boolean = false;

  constructor(id: any, name: any, surname: any, is: any)
  {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.isSelected = is;
  }
}
