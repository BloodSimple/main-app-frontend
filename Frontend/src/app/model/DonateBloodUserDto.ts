export class DonateBloodUserDTO{

    public id: number;
    public name:string;
    public lastName:string;
    public personalId:string;
    public address: string;
    public phoneNumber:string;
    public job:string;
    public latestBloodDonation: string;
    public email:string;

    constructor(id: number,name:string,lastname:string, personalId:string, address:string,
        phoneNumber:string, job:string,latestBloodDonation:string, email:string){
        this.id = id;
        this.name=name;
        this.lastName=lastname;
        this.personalId = personalId;
        this.address=address;
        this.phoneNumber=phoneNumber;
        this.job=job;
        this.latestBloodDonation=latestBloodDonation;
        this.email=email;
     }

    
}