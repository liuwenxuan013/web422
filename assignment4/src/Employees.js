import React from 'react';
import MainContainer from './MainContainer';
import moment from 'moment';

const Employees = ({employees, title}) => (
    <MainContainer sidebar={title}>
        <h1 className="page-header">{title}</h1>
        <table className="table table-striped table-bordered">
            <tbody>
                <tr>
                    <th>Name & Position</th>
                    <th>Addresss</th>
                    <th>Phone Num</th>
                    <th>Hire Date</th>
                    <th>Salary Bonus</th>
                </tr>
                {employees.map((employee, index) => {
                    return (
                        <tr>
                            <td key={index}>{employee.FirstName} {employee.LastName}-{employee.Position.PositionName}</td>
                            <td key={index}>{employee.AddressStreet}, {employee.AddressCity}, {employee.AddressState}, {employee.AddressZip}</td>
                            <td key={index}>{employee.PhoneNum} ext {employee.Extension}</td>
                            <td key={index}>{moment(employee.HireDate).format('LL')}</td>
                            <td key={index}>${employee.SalaryBonus}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </MainContainer>
);
export default Employees
