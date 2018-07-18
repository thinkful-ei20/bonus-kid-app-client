import React from 'react';

import { connect } from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { fetchTasks, postTask } from '../actions/tasks';


const mapStateToProps = state => ({
  authToken: state.auth.authToken !== null,
  loggedIn: state.auth.user !== null,
  tasks: state.tasks.tasks
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
        Task: {task.name}
        Point Value: {task.pointValue}
      </li>
    );
    return(
      <div>
        <p>hello from dashboard</p>
        <Link to='/rewards'>Rewards</Link>
        <ul className='tasks-list'>
          {tasksList}
        </ul>
        <form className='add-task-form' onSubmit={this.props.handleSubmit(
          values => {
            console.log(values)
            this.props.dispatch(postTask(values))
          })}>
          <label htmlFor='name'>Enter a task name: </label>
          <Field component='input' name='name'
            type='text' id='username' />
          <label htmlFor='pointValue'>How many points is this task worth: </label>
          <Field component='input' name='pointValue'
            type='number' id='pointValue' />
          <button 
            disabled={this.props.pristine || this.props.submitting}>
            Add a task!
          </button>
        </form>
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