import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  url = 'http://localhost:3000/';
  constructor(
    private alertController: AlertController,
    private http: HttpClient,
    private router: Router
  ) {}

  async updatePassword(email, phoneNumber, password, confirmPassword) {
    let data = {
      email,
      phoneNumber,
      password,
    };
    if (
      email === '' ||
      phoneNumber < 8 ||
      password < 8 
      ||      password !== confirmPassword
    ) {
      const alert = await this.alertController.create({
        header: 'Invalid details ',
        message: 'Enter correct details and try again',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      if (navigator.onLine) {
        this.http.post(this.url + 'forgot-password', data).pipe(map((res)=> res)).subscribe((response)=>{
          if(response==="updated password"){
            this.router.navigate(['Login']);
          }
          // console.log(response)
        })
      } else {
        const alert = await this.alertController.create({
          header: 'You are offline ',
          message: 'Go back online and try again',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }
  ngOnInit() {}
}
