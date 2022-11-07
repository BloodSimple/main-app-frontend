import { Component, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/model/address';
import { MedicalCenterModel } from 'src/app/model/medicalCenter';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';

@Component({
  selector: 'app-medical-centers',
  templateUrl: './medical-centers.component.html',
  styleUrls: ['./medical-centers.component.css']
})
export class MedicalCentersComponent implements OnInit {

  name: string = '';
  description: string = '';

  medicalCenter = new MedicalCenterModel();
  medicalCenters: MedicalCenterModel[] = [];
  address = new AddressModel();

  searchText: any ='';
  selected: number = 0;

  constructor(private medicalCenterService: MedicalCenterService) { }

  ngOnInit(): void {
      this.medicalCenterService.getMedicalCenters().subscribe((medicalCenters: MedicalCenterModel[]) => {
        this.medicalCenters = medicalCenters;  
        console.log(this.medicalCenters);
      });
  }

  onSelect() {
    this.medicalCenters = this.medicalCenters.filter((item: any)=> item.grade == this.selected);
    console.log(this.selected);
  }

  resetFilter() {
    window.location.reload();
  }

}
