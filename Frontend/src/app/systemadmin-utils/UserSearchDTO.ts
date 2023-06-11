import { AddressDTO } from "./AddressDTO";
import { UserDTO } from "./UserDTO";

export class UserSearchDTO{
    personalId:string;
    email:string;
    password:string;
    nameSurname:string;

    gender:string;
    address:AddressDTO;
    phoneNumber:string;
    job:string;
    bio:string;
    role:string;
    public id:number = -1;
    constructor(user:UserDTO){
        this.email=user.email;
        this.password=user.password;
        this.nameSurname=user.name+ ' ' + user.surname;
        this.gender=user.gender;
        this.address=user.address;
        this.phoneNumber=user.phoneNumber;
        this.job=user.job;
        this.bio=user.bio;
        this.role=user.role;
        this.personalId = user.personalId;
    }
}