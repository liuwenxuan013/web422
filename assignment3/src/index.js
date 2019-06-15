/*********************************************************************************
 * WEB422 – Assignment 03
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
 of this
 * assignment has been copied manually or electronically from any other source (including web sites)
 or
 * distributed to other students.
 *
 * Name: Wenxuan Liu     Student ID: 160678173       Date: 2019/06/10
 *
 ********************************************************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TeamManagement from './TeamManagement';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TeamManagement />, document.getElementById('root'));

serviceWorker.unregister();
