import { Component } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export default class AppComponent {
  title = 'project';
  col: string = 'none'
  time = new Date();
  intervalId: any;
  subscription: any;
  constructor() {
  }

  onClose() {
    this.col = 'none'
  }

  onOpen() {
    this.col = 'block'
  }

  ngOnInit() {
    this.time1();
  }
  
  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  time1() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
} 
