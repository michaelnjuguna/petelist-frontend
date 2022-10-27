import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // use angular guards
  authentication = false;
  constructor(private router:Router)  {
    if (this.authentication === false) {
      this.router.navigate(['new-user']);
      }else if(this.authentication === true) {
        this.router.navigate(['home'])
      }
  }
}
