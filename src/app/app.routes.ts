import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeShowAttendanceComponent } from './componants/employee-show-attendance/employee-show-attendance.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AddAttendanceComponent } from './componants/add-attendance/add-attendance.component';
import { HrAttendacesViewComponent } from './componants/hr-attendaces-view/hr-attendaces-view.component';
import { AddLeaveRequestComponent } from './componants/add-leave-request/add-leave-request.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EmployeeLeaveRequestsComponent } from './componants/employee-leave-requests/employee-leave-requests.component';
import { EmployeeHrLeaveRequestsComponent } from './componants/employee-hr-leave-requests/employee-hr-leave-requests.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'employee-attendance', component: EmployeeShowAttendanceComponent },
    { path: 'attendance-form', component: AddAttendanceComponent },
    { path: 'hr-view-attendances', component: HrAttendacesViewComponent },
    { path: 'add-leave-request', component: AddLeaveRequestComponent },
    { path: 'employee-leave-requests', component: EmployeeLeaveRequestsComponent },
    { path: 'hr-leave-requests', component: EmployeeHrLeaveRequestsComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule, MatSnackBarModule],
    exports: [RouterModule],
    providers: []
}) 

export class AppRoutingModule{} 