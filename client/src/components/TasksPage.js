import React from 'react';
import {connect} from 'react-redux';

import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import { fetchTasks } from '../actions/tasks';

export class TaskPage extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchTasks());
  }
  render () {
    console.log(this.props.tasks);

      const tasks = this.props.tasks.map((element,i) => 
          <li className='tasks-list' key={i}>
            <TaskCard item_id={element.id} {...element} />
          </li> 
      );

    return(
      <div className='page-container'>
        <h1>Tasks will go here </h1>
        <TaskForm />
        <ul className='task-list'>
          {tasks}
        </ul>
      </div>
    );
  }
}

TaskPage.defaultProps = {
  title: 'Task Page'
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  auth: state.auth
});

export default connect(mapStateToProps)(TaskPage);