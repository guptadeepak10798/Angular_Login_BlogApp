import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EditUserProfileComponent } from './components/edit-user-profile/edit-user-profile.component';
import { UserManagementComponent } from './modules/components/user-management/user-management.component';
import { AdminModule } from './modules/admin/admin.module';
// import { AngularSlickgridModule } from 'angular-slickgrid';
// import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    RegisterUserComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    UserManagementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatGridListModule,
    ReactiveFormsModule,
    
    MatSnackBarModule,
    MatProgressBarModule,
    MatDialogModule,
    AdminModule
    // AngularSlickgridModule
    // ToastrModule.forRoot({positionClass: 'toast-top-right',})
  ],
  providers: [
      LoginService,
      AuthGuard,
      [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
