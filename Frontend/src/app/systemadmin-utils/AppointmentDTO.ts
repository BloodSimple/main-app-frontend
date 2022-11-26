import { MedicalCenterDTO } from "./MedicalCenterDTO";
import { UserDTO } from "./UserDTO";

export class AppointmentDTO{
    id: number;
    startTime:Date;
    duration:number;
    medicalCenter:MedicalCenterDTO;
    user : UserDTO; 
    bloodType: string;
    amountOfBlood:number

 
    constructor(startTime:Date, amountOfBlood:number, bloodType:string, user:UserDTO, duration:number, medicalCenter:MedicalCenterDTO, id:number){
        this.id = id;
        this.startTime = startTime;
        this.duration=duration;
        this.medicalCenter=medicalCenter;   
        this.user = user;
        this.bloodType = bloodType;
        this.amountOfBlood = amountOfBlood
    }
}