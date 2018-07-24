import ChildDashboardHeader from './ParentDashboardHeader';
import React from 'react';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapStateToProps = state => ({
  authToken: state.auth.authToken !== null,
  user: state.auth.user,
  loggedIn: state.auth.user !== null,
});

export class ChildDashboard extends React.Component{
  componentDidMount(){
  }
  logOut(){    
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render(){
    console.log(this.props.tasks);
    if(!this.props.loggedIn){
      return <Redirect to='/' />;
    }
    return(

      <div>
        <ChildDashboardHeader />
        <div className='feature-card'>
          <div className='side-avatar'>
            <i className='fa fa-id-card fa-5x' aria-hidden="true"></i>
            <hgroup>
              <h2>{this.props.user.name}</h2>
            </hgroup>
          </div>
          <ul className='tasks-list'>
            {this.props.tasks.map((task) =>
              <li className='task' key={`${task.id}`}>
                <div className='task-details'>
                  <p>Task: {task.name}</p>
                  <p>Point Value: {task.pointValue}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
        <button onClick={() => this.logOut()}>
          Log Out
        </button>
      </div>
    );
  }
}


ChildDashboard.defaultProps = {
  tasks: [
    {
      "complete": false,
      "childComplete": false,
      "expiryDate": "",
      "currentTime": "",
      "name": "New task3",
      "pointValue": 54,
      "childId": "5b523369d43bd96dd2e6fe79",
      "parentId": "5b523368d43bd96dd2e6fe75",
      "createdAt": "2018-07-20T19:09:30.143Z",
      "updatedAt": "2018-07-23T14:19:28.494Z",
      "id": "5b52336ad43bd96dd2e6fe81"
    },
    {
      "complete": false,
      "childComplete": false,
      "expiryDate": "",
      "currentTime": "",
      "name": "New task2",
      "pointValue": 54,
      "childId": "5b523369d43bd96dd2e6fe79",
      "parentId": "5b523368d43bd96dd2e6fe75",
      "createdAt": "2018-07-20T19:09:30.143Z",
      "updatedAt": "2018-07-23T14:19:28.494Z",
      "id": "5b52336ad43bd96dd2e6fe82"
    }
  ]
} 

export default connect(mapStateToProps)(ChildDashboard);


// Dummy Data

/*auth:{
  authToken: ####,
  loading: false,
  error: null,
    user: {
      "totalPoints": 100,
      "currentPoints": 50,
        "tasks": [
          {
            "complete": false,
            "childComplete": false,
            "expiryDate": "",
            "currentTime": "",
            "name": "New task3",
            "pointValue": 54,
            "childId": "5b523369d43bd96dd2e6fe79",
            "parentId": "5b523368d43bd96dd2e6fe75",
            "createdAt": "2018-07-20T19:09:30.143Z",
            "updatedAt": "2018-07-23T14:19:28.494Z",
            "id": "5b52336ad43bd96dd2e6fe81"
          }
        ],
        "username": "some other kid",
        "name": "some other kid",
        "parentId": "5b523368d43bd96dd2e6fe75",
        "id": "5b523369d43bd96dd2e6fe79"
    },
  }
}

               
*/