import React from 'react';
import {connect} from 'react-redux';
import '../styles/modals.css';
import { toggleModal } from '../actions';
import { childSubmitTask } from '../actions/tasks';

const mapStateToProps = state => ({
  taskModal: state.main.modalView.tasks,
  // authToken: state.auth.authToken !== null,
  // user: state.auth.user,
  // tasks: state.tasks.tasks
});
export const ChildTaskModal = props => (
  //need a if statement to close 

  <div className={`modal ${props.taskModal ? 'visible': ''}`}>
    <div className='modal-content'>
    {console.log('this is props in modal', props.id)}
      <p>Taskname: {props.taskName}</p>
      <p>PointValue: {props.pointValue}</p>
      <p>expiration date: {Date(props.expiryDate)}</p>
      <p> id: {props.id}</p>
      <button className="submitTask" onClick={ () => props.dispatch(childSubmitTask(props.id))}> Submit Task </button>
      <button onClick={() => props.dispatch(toggleModal())}>Close</button>
    </div>
  </div>
);

export default connect(mapStateToProps)(ChildTaskModal);