import React from 'react';
import {connect} from 'react-redux';
import '../styles/modals.css';
import { toggleModal } from '../actions';
import { childSubmitTask } from '../actions/tasks';

const mapStateToProps = state => ({
  taskModal: state.main.modalView.tasks,
  taskDetails: state.main.showDetails.taskDetails
});
export const ChildTaskModal = props => (
  //need a if statement to close 

  <div className={`modal ${props.taskModal ? 'visible': ''}`}>
    <div className='modal-content'>
    {console.log('showDetails: ',props.taskDetails)
    }

      <p>Taskname: hello modal</p>
      {/* <p>PointValue: {props.taskDetails.pointValue}</p> */}
      {/* <p>expiration date: {Date(props.showDetails.taskDetails.expiryDate)}</p> */}
      {/* <p> id: {props.id}</p> */}
      <button className="submitTask" onClick={ () => props.dispatch(childSubmitTask(props.id))}> Submit Task </button>
      <button onClick={() => props.dispatch(toggleModal())}>Close</button>
    </div>
  </div>
);

export default connect(mapStateToProps)(ChildTaskModal);