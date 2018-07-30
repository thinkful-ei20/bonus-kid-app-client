import React from 'react';
import {connect} from 'react-redux';
import '../../styles/modals.css';
import '../../styles/task-details.css';
import { toggleParentDetails } from '../../actions/toggles';
import ParentTaskDetails from './ParentTaskDetails';
import EditTaskForm from '../Forms/EditTaskForm';

const mapStateToProps = state => ({
  task: state.toggles.chosenCard.details,
  detailView: state.toggles.chosenCard.views.detailView,
  isEditing: state.toggles.chosenCard.views.editing
});

export const ParentTaskModal = props => {
  const highlight = { 
    boxShadow: '5px 5px 20px 10px rgba(0, 122, 77, 0.5)',
    backgroundColor: '#007c4f',
    color: '#ffffff'
  };
  return(
    <div className={`modal ${props.detailView || props.isEditing ? 'visible': ''}`}>
      <section className='task-options'>
        <div className='task-choice'>
          <button
            className='details-tab' 
            disabled={props.detailView}
            onClick={() => props.dispatch(toggleParentDetails(true, false, props.task))}
            style={props.detailView ? highlight : null}
          >DETAILS</button>
          <button 
            className='edit-task-tab' 
            disabled={props.isEditing}
            onClick={() => props.dispatch(toggleParentDetails(false, true, props.task))}
            style={props.isEditing ? highlight : null}
          >EDIT TASK</button> 
        </div>
      </section>
      <div className='modal-content'>
        {props.detailView ? <ParentTaskDetails /> : 
            props.isEditing ? <EditTaskForm /> : null}
        
      </div>
      <button className='close' onClick={() => props.dispatch(toggleParentDetails())}>Close</button>
    </div>
  );
};

export default connect(mapStateToProps)(ParentTaskModal);