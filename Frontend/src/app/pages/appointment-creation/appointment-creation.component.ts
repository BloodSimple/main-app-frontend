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

    let medID = localStorage.getItem('idForMedicalCenter');
    // parseInt(medID||"-1")
    console.log("med id je " + medID);
    this.medicalService.getMedicalCenterById(parseInt(medID||"-1")).subscribe((response)  => {
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

    var medicalStuffForAppintment: MedicalStuffSelection[] = []

    let isOneSelected = false;
    for(const selectedStaff of this.medicalStuffSelection)
    {
      if (selectedStaff.isSelected==true)
      {
        isOneSelected=true;
        let userForList = new MedicalStuffSelection(selectedStaff.id,selectedStaff.name,selectedStaff.surname,selectedStaff.isSelected);
        // userForList.id = selectedStaff.id

        medicalStuffForAppintment.push(userForList);
        console.log("Ima selektovanih osoblja")
      }
    }

    if(isOneSelected==false)
    {
      alert("Medical staff is not selected.")
      return;
    }
    
    //proci kroz listu medical stuff i sacuvati idjeve,
    //poslati idijeve, id centra, datetime
    // let dateString = '1968-11-16T00:00:00' 
    let newDate = new Date(this.datetime);
    const today = new Date();
    if(newDate < today)
    {
      alert("Can't add appointment in past");
    }
    
    // let ndto = new AppointmentDTO(newDate,new UserModel(),this.duration,Number(this.medicalCenter.id), medicalStuffForAppintment);
    
    let newApp = new NewAppointmentFree();
    newApp.duration = this.duration;
    newApp.medicalCenterId = 1;
    newApp.startTime = newDate;
    newApp.medicalStaff = medicalStuffForAppintment;
    console.log("usao u funkciju za create appointment");
    console.log(JSON.stringify(newApp));
    
    this.medicalService.createFreeApointment(newApp).subscribe(response => {

      alert(response);

    })

  }

}

export class MedicalStuffSelection {
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

export class NewAppointmentFree {
  public startTime:Date = new Date();
  public duration:number = -1;
  public medicalCenterId: number = -1;
  public medicalStaff: MedicalStuffSelection[] = [];

}
