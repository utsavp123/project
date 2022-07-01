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

export class  GetDataApi{
    stateId: string = "0";
    disComId: string = "0";
    circleId: string = "0";
    outageType: string = "P";
    startDate: string = "";
    endDate: string = "";
    queryType: string = "S";
  }

  export class newData {
    stateId: number;
    stateName: string;
    discomid: number;
    discomName: string;
    divisionName: string;
    subDivisionName: string;
    subStationName: string;
    feederName: string;
    dtrId: number;
    outageCode: number;
    outType: string;
    outDatetime: string;
    expectedDatetime: string;
    reason: string;
    feederid: number;
    restoreDatetime: string;
    templateid: string;
    reasonid: number;
    status: number;
  }


  export class allState {
    stateID: number;
    name: string
    stateCode: string
    createdBy: number
    createDate: string
    status: number
    languageId: number
  }[]

  export class stateId {
    stateBean= new StateBean();
  }  
  export class StateBean {
    stateID: string;
  }

  export class  getDiscom{
    discomID: number
    discomCode: string
    discomName: string
    stateBean= new StateBeanTwo()
    createdBy: string
    createdDate: string
    isActive: number
    modifiedDate: string
    discomFullName: string
  }
  
  export class StateBeanTwo {
    stateID: number
    name: string
    stateCode: string
    createdBy: number
    createDate: string
    status: number
    languageId: number
  }

  export class circleId {
    stateId: string
    discomId: string 
  }
  
  export class getCircle {
    circleId: number
    circleCode: string
    districtId: number
    stateId: number
    circleName: string
    createdBy: string
    createdDate: string
    discomId: number
    stateName: string
    discomName: string
    employeeId: number
  }[]
  
  
  