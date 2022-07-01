import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { allState, circleId, getCircle, GetDataApi, getDiscom, newData, StateBean, stateId } from '../models/user.model';
import { ElectricityService } from './electricity.service';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.scss']
})
export class ElectricityComponent implements OnInit {
  allDataApi = new GetDataApi();
  stateIdData = new stateId();
  circleIData = new circleId();
  stateData: Array<allState>;
  discomData: getDiscom[] = [];
  circleData: getCircle[];
  newData1: newData[];
  startDate: string;
  endDate: string;
  stateID: string = "0";
  discomID: string = "0";
  circleID: string = "0";
  numberOfPages: number = 10;
  firstRecord: number = 0;
  currentPage: number = 1;
  myNum: number;
  lastPageNo: number;
  lastRecord: number = this.numberOfPages;
  timeFilterRow: boolean = false;
  line:boolean = true
  constructor(private a1: ElectricityService, private SpinnerService: NgxSpinnerService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.collectData();  
    // this.SpinnerService.show();

    // this.readAllStateData();
    this.lastPageNo = 0;
  }
  submitData() {
    let sDate;
    let eDate;
    if ((this.startDate && this.endDate)||(!this.startDate && !this.endDate)) {
      sDate = this.startDate.split("-").reverse().join("-");
      eDate = this.endDate.split("-").reverse().join("-");
      this.allDataApi.startDate = sDate;
      this.allDataApi.endDate = eDate;
    }else{
      console.log(this.allDataApi.startDate); 
    }
    this.allDataApi.queryType = "S";
    this.getRecordInApi();
  }
  readAllStateData() {
    this.SpinnerService.show();
    this.a1.getState().subscribe(val => {
      if (val) {
        this.stateData = val;
        this.SpinnerService.hide();
      } else {
        this.toastr.error("Data Not Found", "Error");
      }
    })
  }

  myFunc() {
    this.SpinnerService.show();
    this.stateIdData.stateBean.stateID = this.stateID;
    this.discomID = "0";
    this.a1.getDiscom(this.stateIdData).subscribe(val => {
      this.discomData = val;
      this.circleID = "0";
      this.SpinnerService.hide();
    })
  }
  myChangeDiscom() {
    this.SpinnerService.show();
    this.circleIData.stateId = this.stateID;
    this.circleIData.discomId = this.discomID;
    console.log(this.circleIData);
    this.a1.getCircle(this.circleIData).subscribe(val => {
      this.circleData = val;
      this.SpinnerService.hide();
    })
  }
  collectData() {
    this.SpinnerService.show();
    this.allDataApi.stateId = "0";
    this.allDataApi.disComId = "0";
    this.allDataApi.circleId = "0";
    this.a1.getData(this.allDataApi).subscribe(val => {
      if (val) {
        this.newData1 = val;
        this.readAllStateData();
        this.SpinnerService.hide();

        this.myNum = this.newData1.length;
        this.lastPageNo = Math.ceil(this.myNum / this.numberOfPages);
      } else {
        this.toastr.error("Data Not Found", "Error");
      }
    })
  }
  Scheduled() {
    if (this.stateID != "0") {
      this.timeFilterRow = true;
    }
    this.allDataApi.queryType = "S";
    this.getRecordInApi();
  }
  ongoing() {
    this.getRecordInApi();
    this.allDataApi.queryType = "O";
    this.timeFilterRow = false;
  }
  getRecordInApi() {
    if (this.stateID == "0") {
      this.toastr.error("Data Not Found", "Error");
    }
    if (!this.discomID) {
      this.toastr.error("Data Not Found", "Error");
    }
    if (!this.circleID) {
      this.toastr.error("Data Not Found", "Error");
    }
    if (this.stateID != "0") {
      this.SpinnerService.show();
      this.allDataApi.stateId = this.stateID;
      this.allDataApi.disComId = this.discomID;
      this.allDataApi.circleId = this.circleID;
      this.a1.getData(this.allDataApi).subscribe(val => {
        if (val) {
          this.newData1 = val;
          this.SpinnerService.hide();
          this.myNum = this.newData1.length;
          this.lastPageNo = Math.ceil(this.myNum / this.numberOfPages);
        } else {
          this.toastr.error("Data Not Found", "Error");
        }
      })
    }
  }
  selctNumberOfPage() {
    this.currentPage = 1;
    this.currentPageNumber(this.currentPage);
    this.lastPageNo = Math.ceil(this.newData1.length / this.numberOfPages);
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.currentPageNumber(this.currentPage)
    }
  }
  currentPageNumber(val) {
    this.currentPage = val;
    this.firstRecord = this.numberOfPages * (val - 1);
    this.lastRecord = this.numberOfPages * val;
  }
  nextpage() {
    if (this.currentPage < this.lastPageNo) {
      this.currentPage = this.currentPage + 1;
      this.currentPageNumber(this.currentPage)
    }
  }
}
