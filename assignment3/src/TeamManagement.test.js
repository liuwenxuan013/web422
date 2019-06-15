import React from 'react';
import ReactDOM from 'react-dom';
import TeamManagement from './TeamManagement';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TeamManagement />, div);
  ReactDOM.unmountComponentAtNode(div);
});
