import { Component } from '@angular/core';

@Component({
  selector: 'app-department-list',
  imports: [],
  templateUrl: './department-list.html',
  styleUrl: './department-list.css',
})
export class DepartmentList {
  protected readonly departments = [
    { name: 'Engineering', manager: 'Rahul Mehta', employees: 84, budget: '₹1.8Cr', openRoles: 4, health: 88 },
    { name: 'Human Resources', manager: 'Ananya Sharma', employees: 18, budget: '₹42L', openRoles: 1, health: 76 },
    { name: 'Finance', manager: 'Priya Nair', employees: 22, budget: '₹65L', openRoles: 2, health: 82 },
    { name: 'Operations', manager: 'Karan Patel', employees: 52, budget: '₹1.1Cr', openRoles: 3, health: 74 },
  ];
}
