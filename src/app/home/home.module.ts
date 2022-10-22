import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { CreateJobPostComponent } from './pages/create-job-post/create-job-post.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import {DeleteUserComponent}from './pages/delete-user/delete-user.component';
import {NewUserComponent}from './pages/new-user/new-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,CreateJobPostComponent,EditProfileComponent,DeleteUserComponent,NewUserComponent]
})
export class HomePageModule {}

