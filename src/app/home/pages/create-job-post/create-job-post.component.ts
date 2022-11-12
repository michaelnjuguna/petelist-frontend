import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-create-job-post',
  templateUrl: './create-job-post.component.html',
  styleUrls: ['./create-job-post.component.scss'],
})
export class CreateJobPostComponent implements OnInit {
  url = 'https://peteslist.onrender.com/';
  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router
  ) {}

  async createJobPost(jobTitle, jobDescription, jobEmail) {
    if (jobTitle.length < 5 || jobDescription.length < 10) {
      const alert = await this.alertController.create({
        header: 'Invalid information',
        message: 'Your job title or description is too short',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      let jobData = {
        jobTitle,
        jobDescription,
        jobEmail,
      };
      if (navigator.onLine) {
        this.http
          .post(this.url + 'jobs', jobData)
          .pipe(map((res) => res))
          .subscribe((response) => {
            if (response === 'Successful') {
              this.router.navigate(['home']);
            }
          });
      }
    }
  }
  ngOnInit() {}
}
