import { AddressModel } from "./address";

export class UserModel {
    id?: string='';
    email?: string='';
    password?: string='';
    name?: string='';
    surname?: string='';
    gender?: string='';
    phoneNumber?: string='';
    job?: string='';
    address = new AddressModel();
//   bio?: string='';
//    role?: string='';
}