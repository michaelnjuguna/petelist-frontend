import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CapacitorCookies } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  primaryColor="#3880ff";
  statusBar(){
    StatusBar.setBackgroundColor({color:this.primaryColor})
  }
  url = 'https://peteslist.onrender.com/';
  fName = '';
  sName = '';
  email = '';
  pNumber = '';
  password = '';
  confirmPassword = '';
  dataVerified:boolean = false;
  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router,
  ) {}
  async signUp(
    firstName,
    secondName,
    email,
    phoneNumber,
    password,
    confirmPassword
  ) {
    this.fName = firstName;
    this.sName = secondName;
    this.email = email;
    this.pNumber = phoneNumber;
    this.password = password;
    this.confirmPassword = confirmPassword;
    
    // checks is user is online
    if (navigator.onLine) {
      this.verifyData();
      if (this.dataVerified === true) {
        this.sendData();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'You are offline',
        message: 'Go back online and try again',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
  async verifyData() {
    if (
      this.fName == '' ||
      this.sName == '' ||
      this.fName.length < 3 ||
      this.sName.length < 3
    ) {
      const alert = await this.alertController.create({
        header: 'Invalid name',
        message: 'Name field is empty or your entry is too short.',
        buttons: ['OK'],
      });
      await alert.present();
      return "invalid name";
    } else if (this.email == '' ) {
      this.dataVerified = false;
      const alert = await this.alertController.create({
        header: 'Invalid email',
        message: 'Enter a valid email address!',
        buttons: ['OK'],
      });
      await alert.present();
      return "invalid email";
    } else if (this.pNumber == '' || this.pNumber.length < 10) {
      this.dataVerified = false;
      const alert = await this.alertController.create({
        header: 'Invalid phone number',
        message: 'Phone number field cannot be empty or is too short! ',
        buttons: ['OK'],
      });
      await alert.present();
      return "invalid phone number"
    } else if (
      this.password == '' ||
      this.confirmPassword == '' ||
      this.password.length < 8
    ) {
      this.dataVerified = false;
      const alert = await this.alertController.create({
        header: 'Invalid password',
        message: 'Password field cannot be empty!',
        buttons: ['OK'],
      });
      await alert.present();
      return "invalid password"
    } else if (this.password !== this.confirmPassword) {
      this.dataVerified = false;
      const alert = await this.alertController.create({
        header: 'Invalid password',
        message: 'Passwords do not match,confirm your password!',
        buttons: ['OK'],
      });
      await alert.present();
      return "invalid password";
    } else {
      this.dataVerified = true;
      return "valid data"
    }
  }
  sendData() {
    let data = {
      fname: this.fName,
      sname: this.sName,
      email: this.email,
      phoneNumber: this.pNumber,
      password: this.password,
    }
    this.http
      .post(this.url + 'signup', data)
      .subscribe((response) => {
        if(response ==="Signed successfully") {
          async ()=>{
            const alert = await this.alertController.create({
              header: 'Successfully signed up',
              buttons: ['OK'],
            });
            await alert.present();
          }
          this.router.navigate(['home']);
        }else if(response ==="Already logged in") {
          async ()=>{
            const alert = await this.alertController.create({
              header: 'You are already signed in',
              message: 'Log in to continue!',
              buttons: ['OK'],
            });
            await alert.present();
          }
          // console.log("Not successful")
        }
      //  console.log("Post response:",response)
      });
  }
  createCookie(){

  }
  ngOnInit() {}
}
