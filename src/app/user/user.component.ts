import { Component, OnInit } from '@angular/core';
// import { ModalManager } from 'ngb-modal';
import { ModComponent } from '../mod/mod.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dropdownModel, userListModel } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  newItem1 =new dropdownModel();
  currentPage: number = 1;
  numberOfPages: number = 10;
  firstRecord: number = 0;
  lastRecord: number = this.numberOfPages;
  sorting: boolean = false;
  inputValue: string;
  a1:number;
  myDropdown : boolean = false;
  lastPageNo:number;
  dropDownArray=["Firstname" , "Middlename", "Lastname" , "DOB" , "Gender" , "Add" , "Country" , "State","City","PinCode","Username", "Email" ,"Password" , "Hooby" , "Skills"];
  filterArray:string[] =[];
  lenFilterArray:number
  userListModel1:userListModel[];
  
  countryArray = [{ name: "India", id: 0 }, { name: "USA", id: 1 }, { name: "Indonesia", id: 2 }]
  
  stateArray = [{ name: "Bihar", cid: 0, id: 0 }, { name: "Goa", cid: 0, id: 1 }, { name: "Gujarat", cid: 0, id: 2 }, { name: "Alabama", cid: 1, id: 3 }, { name: "Alaska", cid: 1, id: 4 }, { name: "California", cid: 1, id: 5 }, { name: "Aceh", cid: 2, id: 6 }, { name: "Bali", cid: 2, id: 7 }, { name: "Bangka Belitung", cid: 2, id: 8 }]
  
  cityArray = [{ name: "Patna", sid: 0, id: 0 }, { name: "Gaya", sid: 0, id: 1 }, { name: "Muzaffarpur", sid: 0, id: 2 }, { name: "Cuncolim", sid: 1, id: 0 }, { name: "Canacona", sid: 1, id: 1 }, { name: "Bicholim", sid: 1, id: 2 }, { name: "Ahemdabad", sid: 2, id: 0 }, { name: "Surat", sid: 2, id: 1 }, { name: "Vadodara", sid: 2, id: 2 }, { name: "Birmingham", sid: 3, id: 0 }, { name: "Huntsville", sid: 3, id: 1 }, { name: "Montgomery", sid: 3, id: 2 }, { name: "Fairbanks", sid: 4, id: 0 }, { name: "Juneau", sid: 4, id: 1 }, { name: "Anchorage", sid: 4, id: 2 }, { name: "Los Angeles", sid: 5, id: 0 }, { name: "San Jose", sid: 5, id: 1 }, { name: "San Diego", sid: 5, id: 2 }, { name: "Lhokseumawe", sid: 6, id: 0 }, { name: "Bireuën", sid: 6, id: 1 }, { name: "Banda Aceh", sid: 6, id: 2 }, { name: "Kuta", sid: 7, id: 0 }, { name: "Ubud", sid: 7, id: 1 }, { name: "Denpasar (at Sanur)", sid: 7, id: 2 }, { name: "Pangkal Pinang", sid: 8, id: 0 }, { name: "Manggar", sid: 8, id: 1 }, { name: "Sungai Liat", sid: 8, id: 2 }]
  constructor(public modal: NgbModal) { }
  
  ngOnInit(): void {
    this.userListModel1 =localStorage.getItem("FormData") ? JSON.parse(localStorage.getItem("FormData")) : [];
    this.a1 = this.userListModel1.length;
    this.lastPageNo = Math.ceil(this.a1 / this.numberOfPages);
    this.filterArray=[];
    
    for (let item of this.dropDownArray){
      if(this.newItem1[item]){
        this.filterArray.push(item);
      }
    }
    this.lenFilterArray = this.filterArray.length - 2;
    this.countryNameSelect();
    this.selctNumberOfPage();
  }
  open() {
    this.modal.open(ModComponent, {
      size: 'lg',
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: true,
      backdropClass: "modal-backdrop"
    });
  }
  selctNumberOfPage() {
    this.currentPage = 1;
    this.currentPageNumber(this.currentPage);
    this.lastPageNo = Math.ceil(this.userListModel1.length / this.numberOfPages);
  }
  currentPageNumber(i) {
    this.currentPage = i;
    this.firstRecord = this.numberOfPages * (i - 1);
    this.lastRecord = this.numberOfPages * i;
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.currentPageNumber(this.currentPage)
    }
  }
  nextpage() {
    if (this.currentPage < this.lastPageNo) {
      this.currentPage = this.currentPage + 1;
      this.currentPageNumber(this.currentPage)
    }
  }
  updateData(data) {
    const modalRef = this.modal.open(ModComponent, {
      size: 'lg',
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: true,
      backdropClass: "modal-backdrop"
    });
    modalRef.componentInstance.sendData = data;
    // this.countryNameSelect();
  }
  deleteData(i) {
    this.userListModel1.splice(i, 1);
    let x = 0
    for (i of this.userListModel1) {
      i.id = x;
      x++;
    }
    localStorage.setItem("FormData", JSON.stringify(this.userListModel1));
    this.lastPageNo = Math.ceil(this.userListModel1.length / this.numberOfPages);
    if (this.userListModel1.length % this.numberOfPages == 0 && this.currentPage == this.lastPageNo + 1 && this.currentPage > 1) {
      this.currentPage -= 1;
      this.currentPageNumber(this.currentPage)

    }
    this.a1 = this.userListModel1.length
  }
  sort(colName) {
    if (this.sorting) {
      // if(colName=='country'){

      //   this.userListModel1.sort((a,b)=> this.countryArray.filter(value => a.countryId ==  value.id).map(y=>y.name)[0] > this.countryArray.filter(value => b.countryId ==  value.id).map(y=>y.name)[0] ? 1 : this.countryArray.filter(value => a.countryId ==  value.id).map(y=>y.name)[0] < this.countryArray.filter(value => b.countryId ==  value.id).map(y=>y.name)[0] ? -1:0)

      //   this.country.sort();
      // }
      // else if (colName =="state"){
      //   this.userListModel1.sort((a,b)=> this.stateArray.filter(value => a.stateId ==  value.id).map(y=>y.name)[0]> this.stateArray.filter(value => b.stateId ==  value.id).map(y=>y.name)[0] ? 1 : this.stateArray.filter(value => a.stateId ==  value.id).map(y=>y.name)[0]< this.stateArray.filter(value => b.stateId ==  value.id).map(y=>y.name)[0] ? -1:0)
      //   this.state.sort();
      // }
      // else if (colName=='city'){
      //   this.userListModel1.sort((a,b)=> (this.cityArray.filter(value => a.stateId ==  value.sid && a.cityId==value.id)).map(y=>y.name)[0]>(this.cityArray.filter(value => b.stateId ==  value.sid && b.cityId==value.id)).map(y=>y.name)[0] ? 1 : (this.cityArray.filter(value => a.stateId ==  value.sid && a.cityId==value.id)).map(y=>y.name)[0]< (this.cityArray.filter(value => b.stateId ==  value.sid && b.cityId==value.id)).map(y=>y.name)[0] ? -1:0)
      //   this.city.sort();
      // }
      this.userListModel1.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
      this.sorting = false
    } else {
      // if(colName=='country'){
      //   this.userListModel1.sort((a,b)=> this.countryArray.filter(value => a.countryId ==  value.id).map(y=>y.name)[0] < this.countryArray.filter(value => b.countryId ==  value.id).map(y=>y.name)[0] ? 1 : this.countryArray.filter(value => a.countryId ==  value.id).map(y=>y.name)[0] > this.countryArray.filter(value => b.countryId ==  value.id).map(y=>y.name)[0] ? -1:0)
      //   this.country.reverse();
      // }
      // else if (colName =="state"){
      //   this.userListModel1.sort((a,b)=> this.stateArray.filter(value => a.stateId ==  value.id).map(y=>y.name)[0]< this.stateArray.filter(value => b.stateId ==  value.id).map(y=>y.name)[0] ? 1 : this.stateArray.filter(value => a.stateId ==  value.id).map(y=>y.name)[0]> this.stateArray.filter(value => b.stateId ==  value.id).map(y=>y.name)[0] ? -1:0)
      //   this.state.reverse();
      // }
      // else if (colName=='city'){
      //   this.userListModel1.sort((a,b)=> (this.cityArray.filter(value => a.stateId ==  value.sid && a.cityId==value.id)).map(y=>y.name)[0]< (this.cityArray.filter(value => b.stateId ==  value.sid && b.cityId==value.id)).map(y=>y.name)[0] ? 1 : (this.cityArray.filter(value => a.stateId ==  value.sid && a.cityId==value.id)).map(y=>y.name)[0]> (this.cityArray.filter(value => b.stateId ==  value.sid && b.cityId==value.id)).map(y=>y.name)[0] ? -1:0)
      //   this.city.reverse();
      // }
      this.userListModel1.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
      this.sorting = true
    }
  }

  search() {
    this.userListModel1 = JSON.parse(localStorage.getItem("FormData")) ? JSON.parse(localStorage.getItem("FormData")) : [];
      if (!this.inputValue) {
        this.numberOfPages = 5
      } else {
      this.userListModel1 = this.userListModel1.filter(x =>
        x.fname.trim().toLowerCase().includes(this.inputValue.trim().toLowerCase()) || x.mname.trim().toLowerCase().includes(this.inputValue.trim().toLowerCase()) || x.lname.trim().toLowerCase().includes(this.inputValue.trim().toLowerCase()) || x.email.trim().toLowerCase().includes(this.inputValue.trim().toLowerCase()));
      this.numberOfPages = 1000
    }
    this.countryNameSelect();
    this.selctNumberOfPage();
  }
  countryNameSelect() {
    for (let i of this.userListModel1) {
      i.countryName = this.countryArray.filter(value => value.id == i.countryId).map(y => y.name)[0]
      i.stateName = this.stateArray.filter(value => value.id == i.stateId).map(y => y.name)[0]
      i.cityName = (this.cityArray.filter(value => i.stateId == value.sid && i.cityId == value.id)).map(y => y.name)[0]
    }
  }

  crossOffItem(newItem){
    this.newItem1 = newItem; 
    this.filterArray=[];
    for (let item of this.dropDownArray){
      if(this.newItem1[item]){
        this.filterArray.push(item);
      }
    }
    this.lenFilterArray = this.filterArray.length - 2;
  }
  close(item){
    this.myDropdown = item
  }

}
