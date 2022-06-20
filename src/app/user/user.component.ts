import { Component, OnInit } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { ModComponent } from '../mod/mod.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  new1 = JSON.parse(localStorage.getItem('FormData'));
  countryArray = [{ name: "India", id: 0 }, { name: "USA", id: 1 }, { name: "Indonesia", id: 2 }]
  stateArray = [{ name: "Bihar", cid: 0, id: 0 }, { name: "Goa", cid: 0, id: 1 }, { name: "Gujarat", cid: 0, id: 2 }, { name: "Alabama", cid: 1, id: 3 }, { name: "Alaska", cid: 1, id: 4 }, { name: "California", cid: 1, id: 5 }, { name: "Aceh", cid: 2, id: 6 }, { name: "Bali", cid: 2, id: 7 }, { name: "Bangka Belitung", cid: 2, id: 8 }]
  cityArray = [{ name: "Patna", sid: 0, id: 0 }, { name: "Gaya", sid: 0, id: 1 }, { name: "Muzaffarpur", sid: 0, id: 2 }, { name: "Cuncolim", sid: 1, id: 0 }, { name: "Canacona", sid: 1, id: 1 }, { name: "Bicholim", sid: 1, id: 2 }, { name: "Ahemdabad", sid: 2, id: 0 }, { name: "Surat", sid: 2, id: 1 }, { name: "Vadodara", sid: 2, id: 2 }, { name: "Birmingham", sid: 3, id: 0 }, { name: "Huntsville", sid: 3, id: 1 }, { name: "Montgomery", sid: 3, id: 2 }, { name: "Fairbanks", sid: 4, id: 0 }, { name: "Juneau", sid: 4, id: 1 }, { name: "Anchorage", sid: 4, id: 2 }, { name: "Los Angeles", sid: 5, id: 0 }, { name: "San Jose", sid: 5, id: 1 }, { name: "San Diego", sid: 5, id: 2 }, { name: "Lhokseumawe", sid: 6, id: 0 }, { name: "Bireuën", sid: 6, id: 1 }, { name: "Banda Aceh", sid: 6, id: 2 }, { name: "Kuta", sid: 7, id: 0 }, { name: "Ubud", sid: 7, id: 1 }, { name: "Denpasar (at Sanur)", sid: 7, id: 2 }, { name: "Pangkal Pinang", sid: 8, id: 0 }, { name: "Manggar", sid: 8, id: 1 }, { name: "Sungai Liat", sid: 8, id: 2 }]
  country = new Array()
  state = new Array()
  city = new Array()
   

  
  constructor(public modal: NgbModal) { }
  ngOnInit(): void {
    this.countrySelect();
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
  countrySelect(){
    if(this.new1){
      for(let i of this.new1){
        this.country.push(this.countryArray.filter(value => i.Country ==  value.id))
        this.state.push(this.stateArray.filter(value => i.State ==  value.id))
        this.city.push(this.cityArray.filter(value => i.City ==  value.id))
      } 
    }
  }

}

