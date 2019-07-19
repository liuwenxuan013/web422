import React from 'react';
import {Link} from 'react-router-dom';

const TeamsPanel = ({title, teams}) => (
    <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title">{title}</h3>
        </div>
        <div className="panel-body">
            <div className="table-responsive overview-table">
                <table className="table table-striped table-bordered">
                    <tbody>
                        {teams.map((team, index) => {
                            return (
                                <tr>
                                    <td key={index}>{team.TeamName  }</td>
                                    <td key={index}>{team.Employees.length} Employees</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
        </div>
    </div>
);
export default TeamsPanel
