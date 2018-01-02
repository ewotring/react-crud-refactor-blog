require('bootstrap/dist/css/bootstrap.min.css');
require('./css/main.css');
import React from 'react';
import ReactDOM from 'react-dom';
import ManageBlogs from './ManageBlogs.js'

ReactDOM.render(
  <ManageBlogs />,
  document.getElementById('app')
);
