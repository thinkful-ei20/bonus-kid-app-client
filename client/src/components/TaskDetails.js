import React from 'react';

import {connect} from 'react-redux';
import '../styles/task-details.css';

const mapStateToProps = state => ({
  taskDetail: state.main.showDetails.taskDetails
});

export const TaskDetails = props => {
  const dateCreated = new Date(Number(props.taskDetail.currentTime));
  const dateExpired = new Date(Number(props.taskDetail.expiryDate));
  return(
    <section className='details-page'>
      <div className='detail'>
        <p className='task-name'>{props.taskDetail.name}</p>
        <p className='status'>Status: {props.taskDetail.complete ? 
          <span>APPROVED</span> : props.taskDetail.childComplete ? 
            <span>PENDING APPROVAL</span> : <span>NOT STARTED</span>}</p>
        <div className='approval-btns'>
          <button className='approve'
            onClick={() => console.log('approved button clicked')}>Approve</button>
          <button className='deny'
            onClick={() => console.log('denied button clicked')}>Deny</button>
        </div>
        <p className='points'>Point Value: <span>{props.taskDetail.pointValue}</span></p>
        <p className='create-date'>Date Created: <span>{dateCreated.toLocaleDateString()}</span></p>
        <p className='expiry'>Expiration Date: <span>{dateExpired.toLocaleDateString()}</span></p>
      </div>  
    </section>
  );
};

export default connect(mapStateToProps)(TaskDetails);