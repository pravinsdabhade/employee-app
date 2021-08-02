import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Employee } from '../employee';
import { Message } from '../message';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee : Employee = new Employee();
  message : Message = new Message();

  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.createEmployee();
  }

  createEmployee(){
    this.service.createEmployee(this.employee).subscribe(
      data => {
        this.message=data;
      });
      this.employee = new Employee();
  }

}
