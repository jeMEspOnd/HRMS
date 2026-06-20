import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './employee-edit.html',
  styleUrl: './employee-edit.css',
})
export class EmployeeEdit {
  protected readonly employeeForm;

  constructor(private readonly formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.nonNullable.group({
      name: ['Rahul Mehta', Validators.required],
      email: ['rahul.mehta@company.com', [Validators.required, Validators.email]],
      phone: ['+91 98765 43210', Validators.required],
      department: ['Engineering', Validators.required],
      designation: ['Senior Developer', Validators.required],
      status: ['Active', Validators.required],
      location: ['Hyderabad', Validators.required],
      manager: ['Ananya Sharma'],
    });
  }

  protected submit(): void {
    this.employeeForm.markAllAsTouched();
  }
}
