import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { CreateJobPostComponent } from './pages/create-job-post/create-job-post.component';
import { DeleteUserComponent } from './pages/delete-user/delete-user.component';
import { ErrorComponent } from './pages/error/error.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  { path: 'delete-user', component: DeleteUserComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'create-post', component: CreateJobPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
