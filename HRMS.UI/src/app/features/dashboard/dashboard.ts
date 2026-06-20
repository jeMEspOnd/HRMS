import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected readonly metrics = [
    { label: 'Total Employees', value: '248', detail: '+12 this month' },
    { label: 'Present Today', value: '231', detail: '93.1% attendance' },
    { label: 'Leave Requests', value: '18', detail: '7 awaiting approval' },
    { label: 'Open Positions', value: '09', detail: '4 interviews today' },
  ];

  protected readonly departments = [
    { name: 'Engineering', headcount: 84, progress: 88 },
    { name: 'Operations', headcount: 52, progress: 74 },
    { name: 'Sales', headcount: 46, progress: 68 },
    { name: 'Finance', headcount: 22, progress: 52 },
  ];

  protected readonly activities = [
    { title: 'Ananya Sharma submitted leave request', time: '09:40 AM' },
    { title: 'Payroll review scheduled for Finance', time: '10:15 AM' },
    { title: '3 new employee profiles need verification', time: '11:05 AM' },
    { title: 'Attendance exceptions exported', time: '12:20 PM' },
  ];
}
