import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditUserProfileComponent } from './components/edit-user-profile/edit-user-profile.component';
import { UserManagementComponent } from './modules/components/user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path:'userProfile',
    component:UserProfileComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },
  {
    path:'register-user',
    component:RegisterUserComponent,
    pathMatch: 'full'
  },
  {
    path:'edit-user-profile',
    component:EditUserProfileComponent,
    pathMatch: 'full',
    canActivate:[AuthGuard]
  },

  { 
    path: 'admin', 
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule) 
    
  },

  {
    path:'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path:'user-mamangement', component: UserManagementComponent
      }
    ]
  }

  
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   children: [
     
  //    {
  //      path: 'user-management',
  //      component: HomeComponent
  //    }
  //   ]
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


