import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Employee } from '../employee';
import { Message } from '../message';
import { EmployeeService } from '../employee.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  // Create FormGroup
  // requiredForm: FormGroup;

  employee : Employee = new Employee();
  message : Message = new Message();

  constructor(private service:EmployeeService, private router:Router) {
    this.createEmployee();
   }

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
