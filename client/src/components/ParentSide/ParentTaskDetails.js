import React from 'react';

import {connect} from 'react-redux';
import '../../styles/task-details.css';
import { parentApproveTask } from '../../actions/tasks';
import { toggleParentDetails } from '../../actions/toggles';

const mapStateToProps = state => ({
  taskDetail: state.toggles.chosenCard.details
});

export const ParentTaskDetails = props => {
  const dateExpired = new Date(Number(props.taskDetail.expiryDate));
  return(
    <section className='details-page'>
      <div className='detail'>
        <p className='status'>{props.taskDetail.complete ? 
          <span>APPROVED</span> : props.taskDetail.childComplete ? 
            <span>PENDING APPROVAL</span> : <span>NOT STARTED</span>}</p>
        <p className='task-name'>Name: <span>{props.taskDetail.name}</span></p>
        <p className='points'>Point Value: <span>{props.taskDetail.pointValue}</span></p>
        <p className='expiry'>Due:
          <span className='date-time'>
            <span className='time'>{dateExpired.toLocaleTimeString()}</span>
            <span className='date'>{dateExpired.toLocaleDateString()}</span>
          </span>
        </p>
        <div className='approval-btns'>
          <button className='approve' disabled={!props.taskDetail.childComplete}
            onClick={() => {
              props.dispatch(parentApproveTask(props.taskDetail.id));
              props.dispatch(toggleParentDetails());
            }}>Approve</button>
          <button className='deny' disabled={true}
            onClick={() => props.dispatch(toggleParentDetails())}>Deny</button>
        </div>
      </div>  
    </section>
  );
};

export default connect(mapStateToProps)(ParentTaskDetails);