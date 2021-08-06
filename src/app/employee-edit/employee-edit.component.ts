import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee : Employee;
  id : number;

  constructor(private service: EmployeeService, private activeRouter:ActivatedRoute, 
    private router:Router) { 

    }


  ngOnInit(): void {
    this.employee = new Employee();
    this.id=this.activeRouter.snapshot.params['id'];
    this.service.getOneEmployee(this.id).subscribe(
      data=>{
        this.employee=data;
      }
    );
  }

  updateEmployee(){
    this.service.updateEmployee(this.employee).subscribe(data =>{
        console.log(data),
        this.router.navigate(['/all']);
    });
  }
}
