import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const url = "https://liuwenxuan013.herokuapp.com/";
class EmployeesPanel extends Component {
    constructor() {
        super()
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get(url + 'employees')
            .then(res => {
                const employees = res.data;
                this.setState({
                    employees
                });
            });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.employees.map((employee, index) => {
                                    return (
                                        <tr>
                                            <td key={index}>{employee.FirstName} {employee.LastName}</td>
                                            <td key={index}>{employee.Position.PositionName}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
                </div>
            </div>
        );
    }
}

export default EmployeesPanel;
