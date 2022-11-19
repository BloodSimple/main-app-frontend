import { AddressModel } from "./address";

export class MedicalCenterModel {
    id: string='';
    name: string='';
    address = new AddressModel();
    description: string='';
    grade: number = 0;
    medicalStaff: any;
}