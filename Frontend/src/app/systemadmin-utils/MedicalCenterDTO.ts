import { AddressDTO } from "./AddressDTO";
import { UserDTO } from "./UserDTO";

export class MedicalCenterDTO{
    // id:number;
    name:string;
    address:AddressDTO;
    description:string;
    admin:Array<UserDTO>;
    medicalStaff:Array<UserDTO>;

    constructor(medicalStaff:Array<UserDTO>,
        name:string, address:AddressDTO, description:string, admin:Array<UserDTO> ){
        this.name=name;
        this.address=address;
        this.description=description;
       this.admin=admin;
        this.medicalStaff=medicalStaff;
        // this.id = id;
    }
    constructor2(medicalStaff:Array<UserDTO>, name:string, address:AddressDTO, description:string){
        this.name=name;
        this.medicalStaff=medicalStaff;
        this.address=address;
        this.description=description;
    }
    
}