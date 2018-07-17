import React from 'react';

import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';

import {Redirect} from 'react-router-dom';


import { clearAuthToken } from '../local-storage';
import { fetchTasks } from '../actions/tasks';

const mapStateToProps = state => ({
  authToken: state.auth.authToken !== null,
  loggedIn: state.auth.user !== null,
  tasks: state.tasks.tasks
});

export class Dashboard extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchTasks());
  }

  logOut = () => {    
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render(){
    if(!this.props.loggedIn){
      return <Redirect to='/' />;
    }
    const tasksList = this.props.tasks.map((task, i) => 
      <ul className='tasks-list'>
        <li key={i}>
          Task: {task.name}
          Point Value: {task.pointValue}
        </li>
      </ul>
    );
    return(
      <div>
        <p>hello from dashboard</p>
        {tasksList}
        <button onClick={() => this.logOut()}>
          Log Out
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);