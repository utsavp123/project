export class insertUpdateUserModel {
    fname: string;
    lname: string;
    mname: string;
    dob: Date;
    address: string
    countryId: number = -1;
    stateId: number = -1;
    cityId: number = -1;
    skill: string[] = [];
    hobby: string[] = [];
    gender: string;
    All: boolean = false;
    PlayGame: boolean = false;
    Reading: boolean = false;
    Exercise: boolean = false;
    pinCode: string;
    userName: string;
    email: string;
    password: string;
    conPassword: string;
    id: number;
    currentDataTime:Date;
}


export class userListModel {
    fname: string;
    lname: string;
    mname: string;
    dob: Date;
    address: string
    countryId: number;
    stateId: number;
    cityId: number;
    skill: string[];
    hobby: string[];
    gender: string;
    All: boolean;
    PlayGame: boolean;
    Reading: boolean;
    Exercise: boolean;
    pinCode: string;
    userName: string;
    email: string;
    password: string;
    conPassword: string;
    id: number;
    countryName: string;
    stateName: string;
    cityName: string;

} [];

export class dropdownModel {
    Firstname: boolean= true;
    Middlename: boolean =true;
    Lastname: boolean =true;
    DOB: boolean =true;
    Gender: boolean = true;
    Add: boolean = false;
    Country: boolean = false;
    State: boolean = false;
    City: boolean = false;
    PinCode: boolean = false;
    Username: boolean = false;
    Email: boolean = false ;
    Password: boolean  = false ;
    Hooby: boolean  = false ;
    Skills: boolean = false;
 
}
