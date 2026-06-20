import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  protected readonly summary = [
    { label: 'Active Employees', value: '248' },
    { label: 'New Joiners', value: '12' },
    { label: 'On Leave', value: '18' },
    { label: 'Departments', value: '08' },
  ];

  protected readonly employees = [
    {
      id: 1001,
      name: 'Ananya Sharma',
      email: 'ananya.sharma@company.com',
      role: 'HR Manager',
      department: 'Human Resources',
      location: 'Bengaluru',
      status: 'Active',
    },
    {
      id: 1002,
      name: 'Rahul Mehta',
      email: 'rahul.mehta@company.com',
      role: 'Senior Developer',
      department: 'Engineering',
      location: 'Hyderabad',
      status: 'Active',
    },
    {
      id: 1003,
      name: 'Priya Nair',
      email: 'priya.nair@company.com',
      role: 'Payroll Analyst',
      department: 'Finance',
      location: 'Mumbai',
      status: 'On Leave',
    },
    {
      id: 1004,
      name: 'Karan Patel',
      email: 'karan.patel@company.com',
      role: 'Operations Lead',
      department: 'Operations',
      location: 'Pune',
      status: 'Active',
    },
    {
      id: 1005,
      name: 'Meera Iyer',
      email: 'meera.iyer@company.com',
      role: 'Sales Executive',
      department: 'Sales',
      location: 'Chennai',
      status: 'Probation',
    },
  ];

  protected initials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }
}
