import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  // TODO:Add status bar 
  constructor(private router: Router) { }
  renderLogin(){
    this.router.navigate(['Login'])
  }
  renderSignUp(){
    this.router.navigate(['signup']);
  }

  ngOnInit() {}

}
