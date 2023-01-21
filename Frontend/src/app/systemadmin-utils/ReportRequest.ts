import { Time } from "@angular/common";
import { Timestamp } from "rxjs";
import { AddressDTO } from "./AddressDTO";
import { ReportDTO } from "./reportDTO";
import { UserDTO } from "./UserDTO";

export class ReportRequest{
    // id:number;
    appointmentReport : ReportDTO | undefined;
    bloodType : String | undefined;
    amountOfBlood : number | undefined;
    bags : number | undefined 
    needles : number | undefined
    syringes : number | undefined


    
}