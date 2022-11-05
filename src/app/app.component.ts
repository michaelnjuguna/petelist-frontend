import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // use angular guards
  authentication = false;
  url = 'http://localhost:3000/';
  constructor(
    private router: Router,
    private http: HttpClient,
    private alertController: AlertController
  ) {
    this.authUser();
  }

  async authUser() {
    if (navigator.onLine) {
      this.http
        .get(this.url + 'posts')
        .pipe(map((res) => res))
        .subscribe((response) => {
          console.log('GET Response:', response);
          if (response === 'authenticated') {
            this.router.navigate(['home']);
            this.authentication = true;
          } else if (response === 'not authenticated') {
            this.authentication = false;
            this.router.navigate(['new-user']);
          }
        });
    } else {
      const alert = await this.alertController.create({
        header: 'You are offline',
        message: 'Go back online and try again',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
