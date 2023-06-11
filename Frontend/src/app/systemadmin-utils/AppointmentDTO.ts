import { MedicalCenterDTO } from "./MedicalCenterDTO";
import { UserDTO } from "./UserDTO";
import { UserModel } from "../model/user";

export class AppointmentDTO{
    // id: number;
    public id : number = -1;
    startTime:Date;
    duration:number;
    public status : any = " ";
    //ne treba mi?
    // medicalCenter:MedicalCenterDTO;
    user : UserModel; 
    // bloodType: string;
    // amountOfBlood:number;

    //dodati staff koji ce biti na terminu
    medicalCenterId: number;
    medicalStaff: UserModel[];

    constructor(startTime:Date, 
        // amountOfBlood:number, bloodType:string, 
        user:UserModel, 
        duration: number,
        // medicalCenter:MedicalCenterDTO, 
        // id:number,
        medicalCenterId: number, medicalStaff:UserModel[]
         ){
        // this.id = id;
        this.startTime = startTime;
        this.duration=duration;
        this.medicalCenterId = medicalCenterId;
        this.medicalStaff = medicalStaff;
        // this.medicalCenter=medicalCenter;   
        this.user = user;
        // this.bloodType = bloodType;
        // this.amountOfBlood = amountOfBlood
    }

}