import React from 'react';
import {connect} from 'react-redux';
import '../../styles/modals.css';
import { toggleAddTaskForm } from '../../actions/toggles';

import AddTaskForm from '../Forms/AddTaskForm';

const mapStateToProps = state => ({
  isAdding: state.toggles.addTaskView.adding,
  id: state.toggles.addTaskView.id
});
export const AddTaskModal = props => {
  // console.log(props.isAdding.id);
  return(
  <div className={`modal ${props.isAdding ? 'visible': ''}`}>
    <div className='modal-container add-task'>
      <AddTaskForm />
    </div>
    <button className='close' onClick={() => props.dispatch(toggleAddTaskForm())}>
      Cancel</button>
  </div>
);

}

export default connect(mapStateToProps)(AddTaskModal);