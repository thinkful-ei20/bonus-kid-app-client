import TaskDetails from './TaskDetails';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';
import React from 'react';
import {connect} from 'react-redux';
import '../styles/modals.css';
import { toggleModal, showDetails, isAdding, isEditing } from '../actions';

const mapStateToProps = state => ({
  taskModal: state.main.modalView.tasks,
  isEditing: state.main.isEditing.editing,
  isAdding: state.main.isAdding.adding,
  showDetails: state.main.showDetails,
  childId: state.main.showDetails.childId, 
  task: state.main.showDetails.taskDetails
});

export const ParentTaskModal = props => {
  const highlight = { 
    borderTop: '#36f8b1 1px dashed',
    borderRight: '#36f8b1 1px dashed',
    borderLeft: '#36f8b1 1px dashed',
    boxShadow: '5px 5px 20px 10px rgba(0, 122, 77, 0.5)',
    backgroundColor: '#007c4f',
    color: '#ffffff'
  };
  return(
    <div className={`modal ${props.taskModal ? 'visible': ''}`}>
      <section className='task-options'>
        <div className='task-choice'>
          <button
            className='details-tab' 
            disabled={props.showDetails.detailView}
            onClick={() => {
              props.dispatch(showDetails(props.childId, props.task));
              return props.isEditing ? props.dispatch(isEditing()) : null;
            }
            }
            style={props.showDetails.detailView ? highlight : null}
          >DETAILS</button>
          <button 
            className='edit-task-tab' 
            disabled={props.isEditing}
            onClick={() => {
              props.dispatch(isEditing(props.task.id, props.task.name));
              return props.showDetails.detailView ? props.dispatch(showDetails(props.showDetails.childId, props.task)) : null;
            }
            }
            style={props.isEditing ? highlight : null}
          >EDIT TASK</button> 
        </div>
      </section>
      <div className='modal-content'>
        {props.showDetails.detailView ? <TaskDetails /> : 
            props.isEditing ? <EditTaskForm /> : null}
        
      </div>
      <button className='close' onClick={() => props.dispatch(toggleModal())}>Close</button>
    </div>
  );
};

export default connect(mapStateToProps)(ParentTaskModal);