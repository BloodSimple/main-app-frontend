import { MedicalCenterDTO } from "./MedicalCenterDTO";
import { UserDTO } from "./UserDTO";

export class AppointmentDTO{
    id: number;
    startTime:Date;
    duration:number;
    medicalCenter:MedicalCenterDTO;
    user : UserDTO; 
    amountOfBlood:number

 
    constructor(startTime:Date, amountOfBlood:number, user:UserDTO, duration:number, medicalCenter:MedicalCenterDTO, id:number){
        this.id = id;
        this.startTime = startTime;
        this.duration=duration;
        this.medicalCenter=medicalCenter;   
        this.user = user;
        this.amountOfBlood = amountOfBlood
    }
}