import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Roles } from '../../types/employee.model';
import { EmployeeService } from '../../services/Employee/employee.service';
import { OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,CommonModule,MatCardModule,MatIcon],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  isOpen : boolean = false;
  roles = Object.values(Roles);
  employees :any = [];
  searchTerm =''
  constructor(private employeeService : EmployeeService,private router: Router){}


  ngOnInit(): void {
}

  openModal(){
    this.isOpen = true;
  }


  closeModal():void{
    this.isOpen = false;
  }


  searchByName() {
    console.log(this.searchTerm)
    this.employeeService.searchData(this.searchTerm.trim()).subscribe({
      next: (resp) => {
        if (resp && Array.isArray(resp)) {
          this.employees = resp;
        } else {
          this.employees = [];
          alert('User doesn’t exist or an error occurred');

        }
      },
      error: (error) => {
        console.error('Search error:', error);
        this.employees = [];

        alert('User doesn’t exist or an error occurred');
      }
    });
  }


  getEmployees(){
    this.employeeService.getData().subscribe({
      next : (resp)=>{this.employees=resp},
    error: (error) => {console.log(error)}
  })
  }

  viewEmployeeDetails(id: number) {
    this.router.navigate([`/employees/${id}`]);
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
  error: (err) => {console.error('Error:', err);
    alert('User with same name and address exists')
  }
});

form.resetForm();    }
  }


}
