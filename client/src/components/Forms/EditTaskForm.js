import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from '../Forms/Input';

import '../../styles/edit-task-form.css';
import { editTask, deleteTask } from '../../actions/tasks';
import { toggleParentDetails } from '../../actions/toggles';

const mapStateToProps = state => ({
  isEditing: state.toggles.chosenCard.views.editing,
  id: state.toggles.chosenCard.details.id,
  task: state.toggles.chosenCard.details
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
            this.props.dispatch(toggleParentDetails());
            const {taskName, pointValue} = values;
            const newTask = {
              name: taskName, 
              points: pointValue
            };
            return this.props.dispatch(editTask(this.props.id, newTask));
          })}>
          {error}
          <label htmlFor='taskName'>Edit Task: </label>
          <Field component={Input} name='taskName' placeholder={this.props.task.name}
            type='text' id='taskName' />
          <label htmlFor='pointValue'>Edit Point Value: </label>
          <Field component={Input} name='pointValue' placeholder={this.props.task.pointValue} 
            type='number' id='pointValue' />
          <button type='submit' className='edit-task-btn' disabled={this.props.pristine || this.props.submitting}>OK</button>
          <button type='button' id='delete-task-btn' onClick={() => {
          this.props.dispatch(deleteTask(this.props.id))
          this.props.dispatch(toggleParentDetails());
        }
        }>DELETE</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'edit-task-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('edit-task-form', 'taskName'))
})(EditTaskForm));