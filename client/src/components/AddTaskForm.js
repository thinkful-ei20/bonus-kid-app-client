import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from './Input';
import {required, nonEmpty} from '../validators';

import '../styles/edit-menu.css';
import { postTask } from '../actions/tasks';
import { isAdding, toggleModal } from '../actions';

const mapStateToProps = state => ({
  isAdding: state.main.isAdding.adding,
  id: state.main.isAdding.id.childId
});

export class AddTaskForm extends React.Component {
  render(){
    let error;
    if(this.props.error){
      error = (<div className='form-error'>{this.props.error}</div>);
    }
    return (
      <div className={this.props.isAdding ? 'visible add-menu' : 'add-menu'}
        onSubmit={this.props.handleSubmit(values => {
          this.props.dispatch(isAdding());
          const {taskName, pointValue} = values;
          const newTask = {
            name: taskName, 
            pointValue
          };
          this.props.dispatch(toggleModal());
          return this.props.dispatch(postTask(this.props.id, newTask));
        })}>
        <form className='add-task-form'>
          {error}
          <label htmlFor='taskName'>Add Task: </label>
          <Field component={Input} name='taskName'
            type='text' id='addTaskName'
            validate={[required, nonEmpty]} />
          <label htmlFor='pointValue'>Add Point Value: </label>
          <Field component={Input} name='pointValue'
            type='number' id='addPointValue' validate={[required, nonEmpty]} />
          <button disabled={this.props.pristine || this.props.submitting}>SUBMIT NEW TASK</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'add-task-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('add-task-form', 'taskName'))
})(AddTaskForm));
