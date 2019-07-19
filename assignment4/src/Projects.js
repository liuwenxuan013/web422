import React from 'react';
import MainContainer from './MainContainer';
import moment from 'moment';

const Projects = ({projects, title}) => (
    <MainContainer sidebar={title}>
        <h1 className="page-header">{title}</h1>
        <div className="row">
                <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                        {projects.map((project, index) => {
                            return (
                                <tr>
                                    <td key={index}>{project.ProjectName}</td>
                                    <td key={index}>{project.ProjectDescription}</td>
                                    <td key={index}>{moment(project.ProjectStartDate).format('LL')}</td>
                                    <td key={index}>{(project.ProjectEndDate == null ? 'n/a' : moment(project.ProjectEndDate).format('LL'))}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
    </MainContainer>
);
export default Projects
