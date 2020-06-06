import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  template:`
    <h3>Employee List</h3>
    <ul>
      <li *ngFor="let emp of empList">{{emp.name}}</li>
    </ul>
  `,
  // templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  empList:Employee[];

  ngOnInit(): void {
    this.empList = this.employeeService.getEmployee() ;
  }

}
