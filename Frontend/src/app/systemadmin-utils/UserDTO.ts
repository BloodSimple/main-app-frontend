import { AddressDTO } from "./AddressDTO";

export class UserDTO{
    id:string;
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

    constructor(id:string,email:string, password:string, name:string,
        surname:string, gender:string,address:AddressDTO, phoneNumber:string,
        job:string, bio:string, role:string){
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
        this.id = id;
    }
}