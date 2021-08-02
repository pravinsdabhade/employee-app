import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Message} from '../message';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-all',
  templateUrl: './employee-all.component.html',
  styleUrls: ['./employee-all.component.css']
})
export class EmployeeAllComponent implements OnInit {

  employees : Employee[] = [];
  message : Message = new Message();

  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.service.getAllEmployees().subscribe(
      data => {this.employees = data},

      error => {this.employees=[]
        console.log(error);
      }
      
      
      );

  }

}
