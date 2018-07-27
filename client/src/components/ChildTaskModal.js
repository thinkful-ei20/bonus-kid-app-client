import React from 'react';
import {connect} from 'react-redux';
import '../styles/modals.css';
import { toggleModal } from '../actions';

import '../styles/task-details.css';
import { childSubmitTask } from '../actions/tasks';

const mapStateToProps = state => ({
  taskModal: state.main.modalView.tasks,
  showDetails: state.main.showDetails,
  task: state.main.showDetails.taskDetails
});
export const ChildTaskModal = props => {
  const dateExpired = props.taskModal ? new Date(Number(props.task.expiryDate)) : null;
  console.log(props.task);
  return(
  <div className={`modal ${props.taskModal ? 'visible': ''}`}>
    <h2 className='child-details-heading'>Details</h2>
    <div className='modal-content'>
      <div className='child-detail'>
        <p className='status'>{props.taskModal ? props.task.complete ? 
          <span>APPROVED</span> : props.task.childComplete ? 
            <span>PENDING APPROVAL</span> : <span>NOT STARTED</span> : null}</p>
        <p className='task-name'>Taskname: <span>{props.taskModal ? props.task.name : null}</span></p>
        <p className='points'>PointValue: <span>{props.taskModal ? props.task.pointValue : null}</span></p>
        <p className='expiry'>Due:
          <span className='date-time'>
            <span className='time'>{props.taskModal ? dateExpired.toLocaleTimeString() : null}</span>
            <span className='date'>{props.taskModal ? dateExpired.toLocaleDateString() : null}</span>
          </span>
        </p>
        <button className='complete-task'
            disabled={props.taskModal ? props.task.childComplete ? true : false : null }
            onClick={() => {
              props.dispatch(childSubmitTask(props.task.id));
              props.dispatch(toggleModal());
            }}>{props.taskModal ? props.task.childComplete ? 'PENDING APPROVAL' : 'COMPLETE TASK' : null}
            </button>
      </div>
    </div>
    <button className='close' onClick={() => props.dispatch(toggleModal())}>Close</button>
  </div>
);

}

export default connect(mapStateToProps)(ChildTaskModal);