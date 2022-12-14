import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  primaryColor="#3880ff";
  statusBar(){
    StatusBar.setBackgroundColor({color:this.primaryColor})
  }
  url = 'https://peteslist.onrender.com/';
  //* status bar color is danger
  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController
  ) {}

  async deleteAccount() {
    if (navigator.onLine) {
      this.http
        .delete(this.url)
        .pipe(map((res) => res))
        .subscribe((response) => {
          if(response === "deleted successfully") {
            this.router.navigate(['signup']);
          }
          // console.log(response);
        });
    }else{
      const alert = await this.alertController.create({
        header: 'You are offline',
        message: 'Go back online and try again',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
  ngOnInit() {}
}
