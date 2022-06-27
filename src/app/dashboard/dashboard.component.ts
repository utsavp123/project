import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalRecord = localStorage.getItem("FormData") ? JSON.parse(localStorage.getItem("FormData")) : [];
  numberOfRecord: number = this.totalRecord.length;
  lastHoursRecord: number;
  lastOneDayRecord: number;
  lastOneMonth:number;
  curr: number;
  hourDiff: number;
  dayDiff: number;
  monDiff:number;
  

  constructor() { }

  ngOnInit(): void {
    this.hours();
    this.day();
    this.month();
  }
  diffrence() {
    this.curr = new Date().getTime();
    const tomiliseconds = (hrs, min, sec) => (hrs * 60 * 60 + min * 60 + sec) * 1000;
    let oneHours = tomiliseconds(1, 0, 0);
    let oneDay = tomiliseconds(24, 0, 0);
    let monthDay = tomiliseconds(30*24, 0, 0);
    this.hourDiff = this.curr - oneHours;
    this.dayDiff = this.curr - oneDay;
    this.monDiff = this.curr - monthDay;
    console.log(this.monDiff);
    
  }
  hours() {
    this.diffrence();
    this.lastHoursRecord = this.totalRecord.filter(val => {
      let n = new Date(val.currentDataTime).getTime();
      console.log(n);
      return n > this.hourDiff
    }
    ).length;
  }
  day() {
    this.diffrence();
    this.lastOneDayRecord = this.totalRecord.filter(val => {
      let n = new Date(val.currentDataTime).getTime();
      return n > this.dayDiff
    }
    ).length;
  }
  month(){
    this.diffrence();
    this.lastOneMonth = this.totalRecord.filter(val => {
      let n = new Date(val.currentDataTime).getTime();
      return n > this.monDiff;
    }
    ).length;
    

  }

}
