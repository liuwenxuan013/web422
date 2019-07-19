import React, {useState, useEffect } from 'react';
import Overview from './Overview';
import Projects from './Projects';
import Teams from './Teams';
import Employees from './Employees';
import NotFound from './NotFound';
import {Switch, Route} from 'react-router-dom';
import axios from "axios";
const url = "https://liuwenxuan013.herokuapp.com/";

function App() {
    const [employees, setEmployees] = useState([]);
    const [teams, setTeams] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        console.log('App is mount! Fetching backendAPI!');
        axios.get(url + 'employees')
            .then(res => setEmployees(res.data))
            .catch(err => console.error('error fetching resful api!'));

        axios.get(url + 'projects')
            .then(res => setProjects(res.data))
            .catch(err => console.error('error fetching resful api!'));

        axios.get(url + 'teams')
            .then(res => setTeams(res.data))
            .catch(err => console.error('error fetching resful api!'));


    }, []);

    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview data={{projects, teams, employees}} title="Overview" />
        )} />
        <Route exact path='/projects' render={() => (
          <Projects projects={projects} title="Projects" />
        )} />
        <Route exact path='/teams' render={() => (
          <Teams teams={teams} title="Teams" />
        )} />
        <Route exact path='/employees' render={() => (
          <Employees employees={employees} title="Employees" />
        )} />
        <Route render={() => (
          <NotFound title="Not Found" />
        )} />
      </Switch>
    );
};

export default App;
