import React from 'react';
import {connect} from 'react-redux';
import '../styles/modals.css';
import { toggleModal, toggleAddModal, isAdding } from '../actions';

import '../styles/task-details.css';
import { childSubmitTask } from '../actions/tasks';
import AddTaskForm from './AddTaskForm';

const mapStateToProps = state => ({
  addModal: state.main.addModal,
  showDetails: state.main.showDetails,
  task: state.main.showDetails.taskDetails,
  isAdding: state.main.isAdding,
});
export const AddTaskModal = props => {
  console.log(props.isAdding.id);
  return(
  <div className={`modal ${props.addModal ? 'visible': ''}`}>
    <h2 className='child-details-heading'>Add Task</h2>
    <div className='modal-content'>
      <AddTaskForm />
    </div>
    <button className='close' onClick={() => {
      props.dispatch(toggleAddModal())
      }
    }>Close</button>
  </div>
);

}

export default connect(mapStateToProps)(AddTaskModal);