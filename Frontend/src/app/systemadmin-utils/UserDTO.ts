import { AddressDTO } from "./AddressDTO";

export class UserDTO{
    personalId:string;
    email:string;
    password:string;
    name:string;
    surname:string;
    gender:string;
    address:AddressDTO;
    phoneNumber:string;
    job:string;
    bio:string;
    role:string;
    first_login:boolean

    constructor(personalId:string,email:string, password:string, name:string,
        surname:string, gender:string,address:AddressDTO, phoneNumber:string,
        job:string, bio:string, role:string,){
        this.email=email;
        this.password=password;
        this.name=name;
        this.gender=gender;
        this.surname=surname;
        this.address=address;
        this.phoneNumber=phoneNumber;
        this.job=job;
        this.bio=bio;
        this.role=role;
        this.personalId = personalId;
        this.first_login = true;
    }
}