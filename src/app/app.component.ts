import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  authentication = true;
  constructor(private router: Router) {
    if (this.authentication === false) {
    this.router.navigate(['new-user']);
    }else{
      this.router.navigate(['home'])
    }
  }
}
