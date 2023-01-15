import { Time } from "@angular/common";
import { Timestamp } from "rxjs";
import { AddressDTO } from "./AddressDTO";
import { UserDTO } from "./UserDTO";

export class ReportDTO{
    // id:number;
    appointment:any;
    numberOfDonations:number | undefined;
    bloodType:String | undefined;
    doctorNote:String | undefined;
    amountOfBlood:number|undefined;
    copperSulphate:number|undefined;
    hemoglobinometer:number|undefined;
    approved:boolean|undefined;
    denialReason:String|undefined;
    leftHand:boolean|undefined;
    stopReason:String|undefined;
    startTime:Date|undefined
    endTime:Date|undefined
    


    
}