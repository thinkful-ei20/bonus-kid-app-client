import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from './Input';
import {required, nonEmpty} from '../validators';

import '../styles/add-task.css';
import { postTask } from '../actions/tasks';
import { isAdding, toggleAddModal } from '../actions';

const mapStateToProps = state => ({
  isAdding: state.main.isAdding.adding,
  id: state.main.isAdding.id,
  task: state.main.showDetails.taskDetails,
});

export class AddTaskForm extends React.Component {
  render(){
    let error;
    if(this.props.error){
      error = (<div className='form-error'>{this.props.error}</div>);
    }
    return (
      <div className={this.props.isAdding ? 'visible add-menu' : 'add-menu'}>
        <form className='add-task-form'
          onSubmit={this.props.handleSubmit(values => {
            this.props.dispatch(isAdding());
            this.props.dispatch(toggleAddModal());
            console.log(values);
            return this.props.dispatch(postTask(this.props.id, values));
          })}>
          {error}
          <label htmlFor='taskName'>Add Task: </label>
          <Field component={Input} name='taskName'
            type='text' id='addTaskName' validate={[required, nonEmpty]} />
          <label htmlFor='pointValue'>Add Point Value: </label>
          <Field component={Input} name='pointValue'
            type='number' id='addPointValue' validate={[required, nonEmpty]} />
          <button className='add-task-btn' disabled={this.props.pristine || this.props.submitting}>ADD NEW TASK</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'add-task-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('add-task-form', 'taskName'))
})(AddTaskForm));
