import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './employee-create.html',
  styleUrl: './employee-create.css',
})
export class EmployeeCreate {
  protected readonly employeeForm;

  constructor(private readonly formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.nonNullable.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      department: ['Engineering', Validators.required],
      designation: ['', Validators.required],
      employeeType: ['Full Time', Validators.required],
      joiningDate: ['', Validators.required],
      location: ['Bengaluru', Validators.required],
      salary: ['', Validators.required],
      manager: [''],
      notes: [''],
    });
  }

  protected submit(): void {
    this.employeeForm.markAllAsTouched();
  }
}
