import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { CreateJobPostComponent } from './pages/create-job-post/create-job-post.component';
import { DeleteUserComponent } from './pages/delete-user/delete-user.component';
import { ErrorComponent } from './pages/error/error.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
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
  {path:'delete-user',component:DeleteUserComponent},
{path:'edit-profile',component:EditProfileComponent},
{path:'create-post',component:CreateJobPostComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
