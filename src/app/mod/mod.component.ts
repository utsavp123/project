import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { newClass } from './mod.model';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.scss']
})
export class ModComponent implements OnInit {
  myForm = new newClass();
  skills: string = '';
  state = new Array();
  city = new Array();
  record = new Array();
  submit: boolean = false
  countryArray = [{ name: "India", id: 0 }, { name: "USA", id: 1 }, { name: "Indonesia", id: 2 }]
  stateArray = [{ name: "Bihar", cid: 0, id: 0 }, { name: "Goa", cid: 0, id: 1 }, { name: "Gujarat", cid: 0, id: 2 }, { name: "Alabama", cid: 1, id: 3 }, { name: "Alaska", cid: 1, id: 4 }, { name: "California", cid: 1, id: 5 }, { name: "Aceh", cid: 2, id: 6 }, { name: "Bali", cid: 2, id: 7 }, { name: "Bangka Belitung", cid: 2, id: 8 }]
  cityArray = [{ name: "Patna", sid: 0, id: 0 }, { name: "Gaya", sid: 0, id: 1 }, { name: "Muzaffarpur", sid: 0, id: 2 }, { name: "Cuncolim", sid: 1, id: 0 }, { name: "Canacona", sid: 1, id: 1 }, { name: "Bicholim", sid: 1, id: 2 }, { name: "Ahemdabad", sid: 2, id: 0 }, { name: "Surat", sid: 2, id: 1 }, { name: "Vadodara", sid: 2, id: 2 }, { name: "Birmingham", sid: 3, id: 0 }, { name: "Huntsville", sid: 3, id: 1 }, { name: "Montgomery", sid: 3, id: 2 }, { name: "Fairbanks", sid: 4, id: 0 }, { name: "Juneau", sid: 4, id: 1 }, { name: "Anchorage", sid: 4, id: 2 }, { name: "Los Angeles", sid: 5, id: 0 }, { name: "San Jose", sid: 5, id: 1 }, { name: "San Diego", sid: 5, id: 2 }, { name: "Lhokseumawe", sid: 6, id: 0 }, { name: "Bireuën", sid: 6, id: 1 }, { name: "Banda Aceh", sid: 6, id: 2 }, { name: "Kuta", sid: 7, id: 0 }, { name: "Ubud", sid: 7, id: 1 }, { name: "Denpasar (at Sanur)", sid: 7, id: 2 }, { name: "Pangkal Pinang", sid: 8, id: 0 }, { name: "Manggar", sid: 8, id: 1 }, { name: "Sungai Liat", sid: 8, id: 2 }]
  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.countryAdd();
  }
  countryAdd() {
  }
  onEnter() {
    if (this.skills != null) {
      this.skills = this.skills.replace(/[ ]+/g, ' ');
    }
    let ind = this.myForm.skill.indexOf(this.skills)
    if (ind == -1 && this.skills != null && this.skills != " ") {
      this.myForm.skill.push(this.skills)
      this.skills = null;
    }
    this.skills = null;
  }
  onBackspace() {
    if(this.skills == null){
      this.myForm.skill.pop();
    }
  }
  closeSkill(e) {
    let ind = this.myForm.skill.indexOf(e)
    this.myForm.skill.splice(ind, 1)
  }
  changeCountry() {
    this.myForm.stateId = -1
    this.myForm.cityId = -1
    this.state = this.stateArray.filter(value => value.cid == this.myForm.countryId)
    this.city = this.cityArray.filter(value => value.sid == this.myForm.stateId)
  }
  changeState() {
    this.myForm.cityId = -1
    this.city = this.cityArray.filter(value => value.sid == this.myForm.stateId)
  }
  selectAll() {
    if (this.myForm.All == true) {
      this.myForm.PlayGame = true
      this.myForm.Reading = true
      this.myForm.Exercise = true
    } else {
      this.myForm.PlayGame = false
      this.myForm.Reading = false
      this.myForm.Exercise = false
    }
  }
  check() {
    if (this.myForm.PlayGame == false || this.myForm.Reading == false || this.myForm.Exercise == false) {
      this.myForm.All = false;
    }
  }
  hobbySave(){
    this.myForm.hobby=[]
    if(this.myForm.PlayGame){
      this.myForm.hobby.push("Play Game")
    }
    if(this.myForm.Exercise){
      this.myForm.hobby.push("Exercise")
    }
    if(this.myForm.Reading){
      this.myForm.hobby.push("Reading")
    }
  }
  validation() {
    
    let abc = "";
    if (!this.myForm.fname) {
      abc += " Please Enter Your First Name <br>";
    }
    if (!this.myForm.mname) {
      abc += "Please Enter Your Middle Name <br>";
    }
    if (!this.myForm.lname ) {
      abc += "Please Enter Your Last Name <br>";
    }
    var date1 = new Date(this.myForm.dob);
    var date2 = new Date();
    var diffDays = date2.getFullYear() - date1.getFullYear(); 
    if (!this.myForm.dob ) {
      abc += "Please Enter Your Birth Date <br>";
    }else if(diffDays < 18 ){
      abc += "Please Enter 18 Year Above Date <br>";
    }
    if (!this.myForm.gender ) {
      abc += "Please Enter Your Gender <br>";
    }
    if (!this.myForm.address ) {
      abc += "Please Enter Your Address <br>";
    }
    if (this.myForm.countryId == -1  ) {
      abc += "Please Enter Your Country <br>";
    }
    if (this.myForm.stateId ==-1) {
      abc += "Please Enter Your State <br>";
    }
    if (this.myForm.cityId ==-1 ) {
      abc += "Please Enter Your City <br>";
    }
    if (!this.myForm.pinCode || this.myForm.pinCode.toString().length != 6 ) {
      abc += "Please Enter Your Pin-Code <br>";
    }
    if (!this.myForm.userName ) {
      abc += "Please Enter Your Username <br>";
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    if (!this.myForm.email ) {
      abc += "Please Enter Your Email <br>";
    }else if(!this.myForm.email.match(mailformat)){
      abc +="Please Enter Valid Email<br>"
    }
    if (!this.myForm.password ) {
      abc += "Please Enter Your Password <br>";
    }
    if (!this.myForm.conPassword ) {
      abc += 'Please Enter Confirm Password <br>';
    }else if(this.myForm.conPassword != this.myForm.password){
      abc += 'The password and confirmation password do not match <br>'    
    }
    if (!this.myForm.Reading && !this.myForm.PlayGame && !this.myForm.Exercise) {
      abc += ` Minimum One Hobby Select <br>`;
    }
    if (!this.myForm.skill[0]) {
      abc += `Minimum One Skill Enter <br>`;
    }
    if(abc){  
    this.toastr.error(abc,"Error");
      this.submit = false
    }else{
        this.localStorageSaveData()
        this.submit = true;
        location.reload();
    }
  }
  localStorageSaveData(){
    this.hobbySave()
    this.record = JSON.parse(localStorage.getItem("FormData")) ? JSON.parse(localStorage.getItem("FormData")) : [];
    this.record.push({
      "Fname": this.myForm.fname,
      "Mname": this.myForm.mname,
      "Lname": this.myForm.lname,
      "DOB": this.myForm.dob,
      "Gender": this.myForm.gender,
      "Address1":this.myForm.address,
      "Country": this.myForm.countryId,
      "State": this.myForm.stateId,
      "City": this.myForm.cityId,
      "PinCode": this.myForm.pinCode,
      "Username": this.myForm.userName,
      "EmaiId":this.myForm.email,
      "Password": this.myForm.password,
      "ConfirmPassword": this.myForm.conPassword,
      "Hobby": this.myForm.hobby,
      "Hobby-Play Game" : this.myForm.PlayGame,
      "Hobby-Reading" : this.myForm.Reading,
      "Hobby-Exercise" : this.myForm.Exercise,
      "Skills": this.myForm.skill,
    })
    localStorage.setItem("FormData", JSON.stringify(this.record));
  }
}