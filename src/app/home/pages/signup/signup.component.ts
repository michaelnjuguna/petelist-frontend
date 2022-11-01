import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  url = 'http://localhost:3000/';
  fName = '';
  sName = '';
  email = '';
  pNumber = '';
  password = '';
  confirmPassword = '';
  dataVerified = false;
  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    
  ) {}
  async signUp(firstName, secondName, email, phoneNumber, password, confirmPassword) {
    this.fName = firstName;
    this.sName = secondName;
    this.email = email;
    this.pNumber = phoneNumber;
    this.password = password;
    this.confirmPassword = confirmPassword;
    // checks is user is online
    if(navigator.onLine){
    this.verifyData();
    if(this.dataVerified === true){
      this.sendData();
    }}
    else {
      const alert = await this.alertController.create({
        header: 'You are offline',
        message: 'Go back online and try again',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
  async verifyData() {
    if (this.fName == '' || this.sName == '') {
      const alert = await this.alertController.create({
        header: 'Invalid name',
        message: 'Name field cannot be empty!',
        buttons: ['OK'],
      });
      await alert.present();
    } else if (this.email == '') {
      const alert = await this.alertController.create({
        header: 'Invalid email',
        message: 'email field cannot be empty!',
        buttons: ['OK'],
      });
      await alert.present();
    } else if (this.pNumber == '') {
      const alert = await this.alertController.create({
        header: 'Invalid phone number',
        message: 'Phone number field cannot be empty!',
        buttons: ['OK'],
      });
      await alert.present();
    } else if (this.password == '' || this.confirmPassword == '') {
      const alert = await this.alertController.create({
        header: 'Invalid password',
        message: 'Password field cannot be empty!',
        buttons: ['OK'],
      });
      await alert.present();
    } else if (this.password !== this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Invalid password',
        message: 'Passwords do not match,confirm your password!',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      this.dataVerified = true;
    }
  }
  sendData() {
    this.http
      .post(this.url + 'signup', { fname: this.fName, sname: this.sName, email: this.email, phoneNumber: this.pNumber, password: this.password})
      .subscribe((response) => {
        if(response == "signed up"){
          alert(response);
        }else {
          alert("No response")
        }
        
      });
  }
  ngOnInit() {}
}
