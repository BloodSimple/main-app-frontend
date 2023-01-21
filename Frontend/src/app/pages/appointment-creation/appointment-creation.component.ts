import { Component, OnInit } from '@angular/core';
import { MedicalCenterModel } from 'src/app/model/medicalCenter';
import { UserModel } from 'src/app/model/user';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';
import { AppointmentDTO } from 'src/app/systemadmin-utils/AppointmentDTO';

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
  
  public duration: number = 10;

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

    var medicalStuffForAppintment: UserModel[] = []
    //proci kroz listu medical stuff i sacuvati idjeve,
    //poslati idijeve, id centra, datetime
    // let dateString = '1968-11-16T00:00:00' 
    let newDate = new Date(this.datetime);

    let ndto = new AppointmentDTO(newDate,new UserModel(),this.duration,Number(this.medicalCenter.id), medicalStuffForAppintment);
    console.log("usao u funkciju za create appointment")
    this.medicalService.createFreeApointment(ndto);

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
