import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { AttendanceList } from './features/attendance/attendance-list/attendance-list';
import { Dashboard } from './features/dashboard/dashboard';
import { DepartmentList } from './features/department/department-list/department-list';
import { EmployeeCreate } from './features/employee/employee-create/employee-create';
import { EmployeeEdit } from './features/employee/employee-edit/employee-edit';
import { EmployeeList } from './features/employee/employee-list/employee-list';
import { LeaveApply } from './features/leave/leave-apply/leave-apply';
import { AdminLayout } from './layout/admin-layout/admin-layout';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    component: AdminLayout,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: Dashboard },
      { path: 'employees', component: EmployeeList },
      { path: 'employees/create', component: EmployeeCreate },
      { path: 'employees/:id/edit', component: EmployeeEdit },
      { path: 'departments', component: DepartmentList },
      { path: 'attendance', component: AttendanceList },
      { path: 'leaves/apply', component: LeaveApply },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
