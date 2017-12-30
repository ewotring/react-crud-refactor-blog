require('bootstrap/dist/css/bootstrap.min.css');
require('./css/main.css');
import React from 'react';
import ReactDOM from 'react-dom';
import ManageAccounts from './ManageAccounts.js'

ReactDOM.render(
  <ManageAccounts />,
  document.getElementById('app')
);
