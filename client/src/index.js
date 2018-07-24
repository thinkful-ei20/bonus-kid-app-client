import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Layout from './components/Layout';
import store from './store';
import './styles/index.css';
import './styles/reset.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>, 
  document.getElementById('root'));