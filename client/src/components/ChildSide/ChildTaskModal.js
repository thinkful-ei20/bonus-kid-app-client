import React from 'react';
import {connect} from 'react-redux';
import '../../styles/modals.css';

import '../../styles/task-details.css';
import { childSubmitTask } from '../../actions/tasks';
import { toggleChildDetails } from '../../actions/toggles';

const mapStateToProps = state => ({
  showDetails: state.toggles.childDetails.detailView,
  task: state.toggles.childDetails.details
});
export const ChildTaskModal = props => {
  const dateExpired = props.showDetails ? new Date(Number(props.task.expiryDate)) : null;
  return(
  <div className={`modal ${props.showDetails ? 'visible': ''}`}>
    <h2 className='child-details-heading'>Details</h2>
    <div className='modal-content'>
      <div className='child-detail'>
        <p className='status'>{props.showDetails ? props.task.complete ? 
          <span>Approved!</span> : props.task.childComplete ? 
            <span>Pending Approval</span> : props.task.denied ? <span>Parent denied completion</span> :
              <span>Not started</span> : null}</p>
        <p className='name'>Taskname: <span>{props.showDetails ? props.task.name : null}</span></p>
        <p className='points'>PointValue: <span>{props.showDetails ? props.task.pointValue : null}</span></p>
        <p className='expiry'>Due:
          <span className='date-time'>
            <span className='time'>{props.showDetails ? dateExpired.toLocaleTimeString() : null}</span>
            <span className='date'>{props.showDetails ? dateExpired.toLocaleDateString() : null}</span>
          </span>
        </p>
        <button className='complete-task'
            onClick={() => {
              props.dispatch(childSubmitTask(props.task.id));
              props.dispatch(toggleChildDetails());
            }}>TASK COMPLETE</button>
      </div>
    </div>
    <button className='close' onClick={() => props.dispatch(toggleChildDetails())}>Close</button>
  </div>
);

}

export default connect(mapStateToProps)(ChildTaskModal);