import { Component, OnInit } from '@angular/core';
import {Employee } from '../data/employee';
import { EmployeeService } from '../data/employee.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:Employee[];
  getEmployeeSub;
  loadingError:boolean = false;

  constructor(private es: EmployeeService) { }

  ngOnInit() {
    this.getEmployeeSub = this.es.getEmployees()
    .subscribe(
      employees => this.employees = employees,
      function(e){this.loadingError = true;}
    );
  }

  ngOnDestroy(){
    if(this.getEmployeeSub != 'undefined'){
      this.getEmployeeSub.unsubscribe();
    }
  }
}
