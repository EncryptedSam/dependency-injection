import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  template:`
  <h3>Employee Detail</h3>
  <ul>
    <li *ngFor="let emp of empList">{{emp.id+" "+emp.name +" "+ emp.age}}</li>
  </ul>
`,
  // templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  empList:Employee[];
  constructor(private employeeService:EmployeeService) { }


  ngOnInit(): void {
    this.empList = this.employeeService.getEmployee() ;
  }

}
