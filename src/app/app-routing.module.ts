import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginComponent } from './home/pages/login/login.component';
import { SignupComponent } from './home/pages/signup/signup.component';
import { EditProfileComponent } from './home/pages/edit-profile/edit-profile.component';
import { CreateJobPostComponent } from './home/pages/create-job-post/create-job-post.component';
import { DeleteUserComponent } from './home/pages/delete-user/delete-user.component';
import { NewUserComponent } from './home/pages/new-user/new-user.component';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // after signup
  {path:'delete-user',component:DeleteUserComponent},
{path:'edit-profile',component:EditProfileComponent},
{path:'create-post',component:CreateJobPostComponent},
{path:'new-user',component:NewUserComponent},
{path:'Login',component:LoginComponent},
{path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
