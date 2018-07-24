import React from 'react';

import { connect } from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import DashboardHeader from './DashboardHeader';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { fetchTasks, postTask } from '../actions/tasks';

import '../styles/dashboard.css';

const mapStateToProps = state => ({
  authToken: state.auth.authToken !== null,
  loggedIn: state.auth.user !== null,
  tasks: state.tasks.tasks,
  user: state.auth.user
});

export class Dashboard extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchTasks());
  }

  logOut(){    
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render(){
    if(!this.props.loggedIn){
      return <Redirect to='/' />;
    }
    const tasksList = this.props.tasks.map((task, i) => 
      <li key={i}>
        <p>Task: {task.name}</p>
        <p>Point Value: {task.pointValue}</p>
      </li>
    );
    return(
      <div>
        <DashboardHeader />
        <div className='feature-card'>
          <div className='side-avatar'>
            <i className="fa fa-id-card fa-5x" aria-hidden="true"></i>
            <hgroup>
              <h2>Hi {this.props.user.name}</h2>
              <h3>Your Total Score: {this.props.user.totalPoints}</h3>
            </hgroup>
          </div>
          <ul className='tasks-list'>
            {this.props.tasks ? tasksList : <li>Add a task below</li>}
          </ul>
        </div>
        <form className='add-task-form' onSubmit={this.props.handleSubmit(
          values => this.props.dispatch(postTask(values)))}>
          <label htmlFor='name'>Enter a task name: </label>
          <Field component={Input} name='name'
            type='text' id='username' />
          <label htmlFor='pointValue'>How many points is this task worth: </label>
          <Field component={Input} name='pointValue'
            type='number' id='pointValue' />
          <button 
            disabled={this.props.pristine || this.props.submitting}>
            Add a task!
          </button>
        </form>
        <Link to='/rewards'>Rewards</Link>
        <button onClick={() => this.logOut()}>
          Log Out
        </button>

      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'add-task-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('registration', Object.keys(errors)[0]))
})(Dashboard));