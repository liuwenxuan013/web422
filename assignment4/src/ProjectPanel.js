import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';
const url = "https://liuwenxuan013.herokuapp.com/";

class ProjectPanel extends Component {
    constructor() {
        super()
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get(url + 'projects')
        .then( res => {
            const projects = res.data;  
            this.setState({
                projects
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
                                { this.state.projects.map((project, index) => {
                                    var days = moment().diff([project.ProjectStartDate], 'days');
                                    return (
                                        <tr>
                                            <td key={index}>{project.ProjectName}</td>
                                            <td key={index}>Active {days} days</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                </div>
            </div>
        );
    }
}

export default ProjectPanel;
