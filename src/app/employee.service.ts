import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {
    employee =[
    {id: 1, name: 'Neeraj' , dept: 'CSE'},
    {id: 2, name: 'Arpan' , dept: 'ME'},
    {id: 3, name: 'Suman' , dept: 'CSE'}]
    getEmployee()
        { return this.employee
    }
    setEmployee(emp) {
        this.employee.push(emp)
    }
}