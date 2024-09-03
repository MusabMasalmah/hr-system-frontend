import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Roles } from '../types/employee.model';
import { EmployeeService } from '../services/Employee/employee.service';
import { OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,CommonModule,MatCardModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  isOpen : boolean = false;
  roles = Object.values(Roles);
  employees :any = [];
  constructor(private employeeService : EmployeeService){}


  ngOnInit(): void {
    this.getEmployees();
}

  openModal(){
    this.isOpen = true;
  }


  closeModal():void{
    this.isOpen = false;
  }


  getEmployees(){
    this.employeeService.getData().subscribe({
      next : (resp)=>{this.employees=resp},
    error: (error) => {console.log(error)}
  })
  }





  employeeData: any = {
    id: null,
    name: '',
    email: '',
    picture: '',
    credit: 0,
    position: '',
    phone_number: '',
    address: '',
    max_paid_leave: 0,
    role: Roles.USER, // Default value, change as needed
    password:''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Employee Data:', this.employeeData);
this.employeeService.postData(this.employeeData).subscribe({
  next: (res) => console.log('director saved:', res),
  error: (err) => console.error('Error:', err)
});

form.resetForm();    }
  }

  toggleEdit(field: string) {
    // You can handle toggling between edit modes for the fields here
  }
}
