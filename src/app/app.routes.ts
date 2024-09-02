import { RouterModule, Routes } from '@angular/router';
import { EmployeeShowAttendanceComponent } from './componants/employee-show-attendance/employee-show-attendance.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AddAttendanceComponent } from './componants/add-attendance/add-attendance.component';
import { HrAttendacesViewComponent } from './componants/hr-attendaces-view/hr-attendaces-view.component';

export const routes: Routes = [
    { path: 'employee-attendance', component: EmployeeShowAttendanceComponent },
    { path: 'attendance-form', component: AddAttendanceComponent },
    { path: 'hr-view-attendances', component: HrAttendacesViewComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule],
    exports: [RouterModule],
    providers: []
}) 

export class AppRoutingModule{} 