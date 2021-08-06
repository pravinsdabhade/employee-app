import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Message } from './message';
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL : string ='http://localhost:8080/api/employees';

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseURL}/all`);
  }

  createEmployee(employee:Employee): Observable<Message>{
    return this.http.post<Message>(`${this.baseURL}/save`,employee);
  }

  getOneEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseURL}/one/${id}`);
  }

  updateEmployee(employee:Employee):Observable<Message>{
    return this.http.put<Message>(`${this.baseURL}/update`,employee)
  }

  deleteEmployee(id:number):Observable<Message>{
    return this.http.delete<Message>(`${this.baseURL}/remove/${id}`)
  }

}
