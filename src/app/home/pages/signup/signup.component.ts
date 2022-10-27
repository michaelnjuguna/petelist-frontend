import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
url="http://localhost:3000/";
  constructor(private http:HttpClient) {}
  signUpGoogle(){
    this.http.get(this.url+'auth/google').subscribe((response=>{
      alert(JSON.stringify(response));
    }))
  }

  ngOnInit() {}

}
