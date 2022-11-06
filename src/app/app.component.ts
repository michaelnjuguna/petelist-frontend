import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { CapacitorCookies } from '@capacitor/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //TODO use angular guards
  //TODO use cookies
  authentication = false;
  url = 'http://localhost:3000/';
  constructor(
    private router: Router,
    private http: HttpClient,
    private alertController: AlertController
  ) {
    this.router.navigate(["Login"])
  }
}
