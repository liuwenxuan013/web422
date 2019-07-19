import React, { Component } from 'react';
import MainContainer from './MainContainer';
import ProjectPanel from './ProjectPanel';
import TeamsPanel from './TeamsPanel';
import EmployeesPanel from './EmployeesPanel';

const Overview = ({data, title}) => (

    <MainContainer sidebar={title}>
        <h1 className="page-header">{title}</h1>
            <div className="row">
                <div className="col-md-4">
                    <ProjectPanel projects={data.projects} title="Projects"/>
                </div>
                <div className="col-md-4">
                    <TeamsPanel teams={data.teams} title="Teams"/>
                </div>
                <div className="col-md-4">
                    <EmployeesPanel employees={data.teams} title="Employees"/>
                </div>
        </div>
    </MainContainer>
);
export default Overview;
