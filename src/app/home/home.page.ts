import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { StatusBar, Style } from '@capacitor/status-bar';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['global.page.scss', 'home.page.scss'],
})
export class HomePage {
  primaryColor="#3880ff";
  statusBar(){
    StatusBar.setBackgroundColor({color:this.primaryColor})
  }
  jobs:any;
  url = 'https://peteslist.onrender.com/';
  constructor(private http: HttpClient,  private router: Router,) {
    this.getTime();
    this.getJobs();
  }
logout(){
  this.router.navigate(["Login"])
}
  getJobs() {
    if (navigator.onLine) {
      this.http
        .get(this.url)
        .pipe(map((res) => res))
        .subscribe((response) => {
          this.jobs=response;
          // console.log(this.jobs);
          // console.log(response);
        });
    }
  }
async  share(){
    await Share.share({
      title: 'Peteslist',
      text: 'View and apply for jobs on petesList',
      // TODO add correct url
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }
  getTime() {
    let time = new Date();
    let hour = time.getHours();
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }
}
