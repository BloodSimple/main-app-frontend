import { UserModel } from "../model/user";
import { AppointmentDTO } from "./AppointmentDTO";
import { MedicalCenterDTO } from "./MedicalCenterDTO";
import { UserDTO } from "./UserDTO";

export class AppointmentScheduleDTO{
    // id : number
    public id : number = -1;
    public status : any = " ";
    startTime:Date;
    endTime :Date ;
    // medicalCenter:MedicalCenterDTO
    // user:UserDTO
    // bloodType:string
    // amountOfBlood : number
    user:UserModel;
    medicalCenterId: number;
    medicalStaff: UserModel[];

    constructor(a:AppointmentDTO ){
        this.user = a.user;
        // this.id = a.id;
        this.startTime = a.startTime;
        this.endTime = new Date(new Date(this.startTime).getTime() +  a.duration*60000)
        this.medicalCenterId = a.medicalCenterId;
        this.medicalStaff = a.medicalStaff;
        // this.medicalCenter = a.medicalCenter
        // this.bloodType = a.bloodType
        // this.amountOfBlood = a.amountOfBlood
    }
}