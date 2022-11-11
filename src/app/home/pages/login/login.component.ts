import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  url = 'http://localhost:3000/';
  loginMail: string = '';
  loginWord: string = '';
  verifiedLoginData: boolean = false;
  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router
  ) {}
  async login(loginEmail, loginPassword) {
    this.loginMail = loginEmail;
    this.loginWord = loginPassword;

    // check if user is online
    if (navigator.onLine) {
      this.verifyLoginData();
      if (this.verifiedLoginData === true) {
        this.sendLoginData();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'You are offline ',
        message: 'Go back online and try again',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  async verifyLoginData() {
    if (this.loginMail == '') {
      const alert = await this.alertController.create({
        header: 'Invalid email ',
        message: 'Email field cannot be empty! ',
        buttons: ['OK'],
      });
      await alert.present();
      return 'invalid email';
    } else if (this.loginWord == '' || this.loginWord.length < 8) {
      const alert = await this.alertController.create({
        header: 'Invalid password ',
        message: 'Password field cannot be empty or it is too short! ',
        buttons: ['OK'],
      });
      await alert.present();
      return 'invalid password';
    } else {
      this.verifiedLoginData = true;
      return 'verifiedLoginData';
    }
  }
  
   sendLoginData() {
    let loginData = {
      mail: this.loginMail,
      pWord: this.loginWord,
    };
    let serverResponse:any;
    this.http
      .post(this.url + 'login', loginData)
      .pipe(map((res) => res))
      .subscribe(async (response) => {
        // console.log(response);
        if (response === 'Login success') {
          this.router.navigate(['home']);
        }else {
          serverResponse = response;
            // console.log("Invalid")
            const alert = await this.alertController.create({
              header: 'Invalid details ',
              message: 'Your password is incorrect.',
              buttons: ['OK'],
            });
            await alert.present();
          }
        
      });
  }

  ngOnInit() {}
}
