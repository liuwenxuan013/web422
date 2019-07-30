import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../data/employee';
import { EmployeeService } from '../data/employee.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:Employee[];
  filteredEmployees:Employee[];
  getEmployeeSub;
  loadingError:boolean = false;

  constructor(private es:EmployeeService, private router:Router) { }

  ngOnInit() {
    this.getEmployeeSub = this.es.getEmployees()
    .subscribe(employees => {
      this.employees = employees;
      this.filteredEmployees = employees;
    },
      function(e){this.loadingError = true;}
    );
  }

  routeEmployee(id:string){
    this.router.navigate(['/employee', id]);
  }

  onEmployeeSearchKeyUp(event: any) {
    let substring: string = event.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter((em) => 
    ((em.FirstName.toLowerCase().indexOf(substring) != -1) || 
    (em.LastName.toLowerCase().indexOf(substring) != -1) ||
    (em.Position["PositionName"].toLowerCase().indexOf(substring) != -1)))

  }

  ngOnDestroy(){
    if(this.getEmployeeSub != 'undefined'){
      this.getEmployeeSub.unsubscribe();
    }
  }
}
