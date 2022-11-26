import { AppointmentDTO } from "./AppointmentDTO";
import { MedicalCenterDTO } from "./MedicalCenterDTO";
import { UserDTO } from "./UserDTO";

export class AppointmentScheduleDTO{
    id : number
    startTime:Date
    endTime :Date 
    medicalCenter:MedicalCenterDTO
    user:UserDTO
    bloodType:string
    amountOfBlood : number

    constructor(a:AppointmentDTO ){
        this.user = a.user;
        this.id = a.id;
        this.startTime = a.startTime;
        this.endTime = new Date(new Date(this.startTime).getTime() +  a.duration*60000)
        this.medicalCenter = a.medicalCenter
        this.bloodType = a.bloodType
        this.amountOfBlood = a.amountOfBlood
    }
}