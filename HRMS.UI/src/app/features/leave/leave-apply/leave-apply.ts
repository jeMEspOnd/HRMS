import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave-apply',
  imports: [ReactiveFormsModule],
  templateUrl: './leave-apply.html',
  styleUrl: './leave-apply.css',
})
export class LeaveApply {
  protected readonly leaveForm;

  constructor(private readonly formBuilder: FormBuilder) {
    this.leaveForm = this.formBuilder.nonNullable.group({
      leaveType: ['Casual Leave', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      approver: ['Ananya Sharma', Validators.required],
      reason: ['', Validators.required],
    });
  }

  protected submit(): void {
    this.leaveForm.markAllAsTouched();
  }
}
