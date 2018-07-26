import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from './Input';
import {required, nonEmpty} from '../validators';

import '../styles/edit-task.css';
import { editTask } from '../actions/tasks';
import { isEditing, toggleModal } from '../actions';

const mapStateToProps = state => ({
  isEditing: state.main.isEditing.editing,
  id: state.main.isEditing.id,
  name: state.main.isEditing.name
});

export class EditTaskForm extends React.Component {
  render(){
    let error;
    if(this.props.error){
      error = (<div className='form-error'>{this.props.error}</div>);
    }
    return (
      <div className={this.props.isEditing ? 'visible edit-menu' : 'edit-menu'}>
        <form className='edit-task-form'
          onSubmit={this.props.handleSubmit(values => {
            this.props.dispatch(isEditing());
            this.props.dispatch(toggleModal());
            const {taskName, pointValue} = values;
            const newTask = {
              name: taskName, 
              points: pointValue
            };
            return this.props.dispatch(editTask(this.props.id, newTask));
          })}>
          {error}
          <label htmlFor='taskName'>Edit Task: </label>
          <Field component={Input} name='taskName'
            type='text' id='taskName' />
          <label htmlFor='pointValue'>Edit Point Value: </label>
          <Field component={Input} name='pointValue'
            type='number' id='pointValue' />
          <button className='edit-task-btn' disabled={this.props.pristine || this.props.submitting}>SUBMIT CHANGES</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'edit-task-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('edit-task-form', 'taskName'))
})(EditTaskForm));
