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
  // const dateExpired = props.showDetails ? new Date(Number(props.task.expiryDate)) : null;
  return(
  <div className={`modal ${props.showDetails ? 'visible': ''}`}>
    <div className='modal-content for-child'>
      <div className='details-page'>
      <div className='status'>{props.showDetails ? props.task.complete ?
        <span>Approved!</span> : props.task.childComplete ? 
        <span>Pending Approval</span> : props.task.denied ? <span>Parent denied,<br></br>Requires completion</span> :
        <span>In Progress...</span> : null}</div>
          <div className='child-detail'>
            <p className='name'>Task: <span>{props.showDetails ? props.task.name : null}</span></p>
            <p className='points'>Points: <span>{props.showDetails ? props.task.pointValue : null}</span></p>
            {/* <p className='expiry'>Due:
              <span className='date-time'>
                <span className='time'>{props.showDetails ? dateExpired.toLocaleTimeString() : null}</span>
                <span className='date'>{props.showDetails ? dateExpired.toLocaleDateString() : null}</span>
              </span>
            </p> */}
            <button className='complete-task'
              disabled={ props.showDetails && props.task.childComplete ? true : false }
              onClick={() => {
                props.dispatch(childSubmitTask(props.task.id));
                props.dispatch(toggleChildDetails());
              }}>
              {props.showDetails ? 
                props.task.childComplete && props.task.complete ? <span>Finished!</span> : 
                  props.task.childComplete && !props.task.complete ? <span>Waiting for Parent Approval</span> : 
                    props.task.denied ? <span>Submit for Approval</span> : <span>Submit for Approval</span> : null
              
              }</button>

          </div>
        </div>
      </div>
    <button className='close' onClick={() => props.dispatch(toggleChildDetails())}>Close</button>
  </div>
);

}

export default connect(mapStateToProps)(ChildTaskModal);