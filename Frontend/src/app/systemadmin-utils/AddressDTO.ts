export class AddressDTO{
 
    street:string;
    number:string;
    city:string;
    country:string;
    x:number;
    y: number;

    constructor(street:string, number:string, city:string, country:string, x:number, y:number){
        this.number = number;
        this.city=city;
        this.country=country;
        this.x=x;
        this.y=y;
        this.street =street;
   
    }
}