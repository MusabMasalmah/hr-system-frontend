import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { EmployeeService } from '../services/Employee/employee.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [MatDividerModule,FormsModule,NgIf],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  employeeData = {
    name: 'Name Last Name',
    email: 'email@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
    position:'Director'
  };

  isEditingName = false;
  isEditingEmail = false;
  isEditingPhone = false;
  isEditingAddress = false;


  toggleEdit(field: string) {
    if (field === 'name') {
      this.isEditingName = !this.isEditingName;
    } else if (field === 'email') {
      this.isEditingEmail = !this.isEditingEmail;
    } else if (field === 'phone') {
      this.isEditingPhone = !this.isEditingPhone;
    } else if (field === 'address') {
      this.isEditingAddress = !this.isEditingAddress;
    }
  }

  // saveChanges() {
  //   this.employeeService.updateEmployee(this.employeeData).subscribe(
  //     response => {
  //       console.log('Employee updated successfully', response);
  //     },
  //     error => {
  //       console.error('Error updating employee', error);
  //     }
  //   );
  // }
}
