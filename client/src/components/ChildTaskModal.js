import React from 'react';
import {connect} from 'react-redux';
import '../styles/modals.css';
import { toggleModal } from '../actions';
import { childSubmitTask } from '../actions/tasks';

const mapStateToProps = state => ({
  taskModal: state.main.modalView.tasks,
  taskDetails: state.main.showDetails.taskDetails,
  user: state.auth.user
});

export const ChildTaskModal = props => {

  const submitTask = () => {
    // console.log('submitTask hit');    
    if(props.taskModal){
      console.log('props.taskDtasil.id',props.taskDetails.id);      
      props.dispatch(childSubmitTask(props.taskDetails.id))
    }
  }
  return (

    <div className={`modal ${props.taskModal ? 'visible': ''}`}>
      <div className='modal-content'>
      {console.log('showDetails: ',props.taskModal ? props.taskDetails.childComplete : null)
      }

        <p>Taskname: {props.taskModal ? props.taskDetails.name : null}</p>
        <p>PointValue: {props.taskModal ? props.taskDetails.pointValue : null}</p>
        <p>expiration date: {props.taskModal ? props.taskDetails.expiryDate : null}</p>
        <p>childComplete: {props.taskModal ? props.taskDetails.childComplete ? 'true' : 'false' : null }</p>

        <button className="submitTask" 
          onClick={ () => {
            submitTask()
            props.dispatch(toggleModal())
          }        
        }> 
        Submit Task </button>

        <button onClick={() => props.dispatch(toggleModal())}>Close</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(ChildTaskModal);