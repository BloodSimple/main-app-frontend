import { AddressDTO } from "./AddressDTO";
import { UserDTO } from "./UserDTO";

export class MedicalCenterDTO{
    // id:number;
    name:string;
    address:AddressDTO;
    description:string;
    admin:UserDTO | undefined;
    medicalStaff:Array<UserDTO>;

    constructor(medicalStaff:Array<UserDTO>,
        name:string, address:AddressDTO, description:string ){
        this.name=name;
        this.address=address;
        this.description=description;
       
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