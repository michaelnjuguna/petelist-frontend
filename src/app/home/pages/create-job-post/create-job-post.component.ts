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
  url = 'http://localhost:3000/';
  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router
  ) {}

 async createJobPost(jobTitle, jobDescription, jobEmail) {
    let jobData = {
      jobTitle,
      jobDescription,
      jobEmail,
    };
    if (navigator.onLine) {
      this.http.post(this.url + 'jobs', jobData).pipe(map(res=>res)).subscribe(response=>{
        if (response=== "Successful"){
          this.router.navigate(['home']);

        }
      })
    }
  }
  ngOnInit() {}
}
