import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { adminAuthGuard } from './guards/admin-auth.guard';
import { EmployeeComponent } from './employee/employee.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfilePageComponent, canActivate:[adminAuthGuard] },
  { path: 'employees', component: EmployeeComponent, canActivate:[adminAuthGuard] },



];


@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule{}
