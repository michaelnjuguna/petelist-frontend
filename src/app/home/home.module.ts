import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { CreateJobPostComponent } from './pages/create-job-post/create-job-post.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,CreateJobPostComponent,EditProfileComponent]
})
export class HomePageModule {}
