import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';

export default function SideBar(props){
    const [highlight, setHighlight] = useState(false);
    return (
        <div className="col-sm-3 col-md-2  sidebar"  onClick={() => setHighlight(true)}>
            <ul className="nav nav-sidebar">
                <li className={(props.highlight === "Overview" ? 'active' : '')}>
                    <Link to="/">Overview
                        <span className="sr-only">(current)</span>
                    </Link>
                </li>
            </ul>
            <ul className="nav nav-sidebar">
                <li className={(props.highlight === "Projects" ? 'active' : '')}>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className={(props.highlight === "Teams" ? 'active' : '')}>
                    <Link to="teams">Teams</Link>
                </li>
                <li className={(props.highlight === "Employees" ? 'active' : '')}>
                    <Link to="/employees">Employees</Link>
                </li>
            </ul>
        </div>
    );
}
