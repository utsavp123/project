import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dropdownModel } from '../models/user.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() sendData: string[];
  @Input() sendFillData: dropdownModel;
  @Output() customerChange: EventEmitter<dropdownModel> = new EventEmitter<dropdownModel>();
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  testObject = new dropdownModel();
  dropdown: boolean;
  searchData: string;
  sendData1: string[];

  abc: boolean;
  constructor() { }


  ngOnInit(): void {
    this.testObject = JSON.parse(JSON.stringify(this.sendFillData));
    this.sendData1 = this.sendData;
  }
  update() {
    this.customerChange.emit(this.testObject);
    this.close.emit(this.dropdown);
  }
  closeDrop() {
    this.close.emit(this.dropdown);

  }
  search() {
    if (!this.searchData) {
      this.sendData1 = this.sendData;
    } else {
      this.sendData1 = this.sendData.filter(x =>
        x.trim().toLowerCase().includes(this.searchData.trim().toLowerCase()));
    }
  }


}
