import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['global.page.scss','home.page.scss'],
})
export class HomePage {
  constructor() {
    this.getTime();
  }
  
  getTime(){
    let time = new Date();
    let hour = time.getHours();
    if(hour < 12){
      return "Good Morning";
    }else if(hour<18){
      return "Good Afternoon";
    }else{
      return "Good Evening";
    }
    
  }
  
}
