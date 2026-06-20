import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance-list',
  imports: [],
  templateUrl: './attendance-list.html',
  styleUrl: './attendance-list.css',
})
export class AttendanceList {
  protected readonly records = [
    { name: 'Ananya Sharma', department: 'Human Resources', checkIn: '09:12 AM', checkOut: '06:04 PM', hours: '8h 52m', status: 'Present' },
    { name: 'Rahul Mehta', department: 'Engineering', checkIn: '09:45 AM', checkOut: '06:30 PM', hours: '8h 45m', status: 'Late' },
    { name: 'Priya Nair', department: 'Finance', checkIn: '-', checkOut: '-', hours: '-', status: 'Leave' },
    { name: 'Karan Patel', department: 'Operations', checkIn: '08:58 AM', checkOut: '05:52 PM', hours: '8h 54m', status: 'Present' },
  ];
}
