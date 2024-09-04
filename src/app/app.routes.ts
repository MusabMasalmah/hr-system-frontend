import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { adminAuthGuard } from './guards/admin-auth.guard';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailedProfileComponent } from './employee-detailed-profile/employee-detailed-profile.component';
import { isRegisteredGuard } from './guards/is-registered.guard';
export const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate:[isRegisteredGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate:[adminAuthGuard] },
  { path: 'employees', component: EmployeeComponent, canActivate:[adminAuthGuard] },
  { path: 'employees/:id', component: EmployeeDetailedProfileComponent, canActivate:[adminAuthGuard] },




];


@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule{}
