import React from 'react';
import {connect} from 'react-redux';
import '../../styles/modals.css';
import '../../styles/task-details.css';
import { toggleParentDetails } from '../../actions/toggles';
import ParentRewardDetails from './ParentRewardDetails';
import EditRewardForm from '../Forms/EditRewardForm';

const mapStateToProps = state => ({
  chosenCard: state.toggles.chosenCard.details,
  detailView: state.toggles.chosenCard.views.detailView,
  isEditing: state.toggles.chosenCard.views.editing
});

export const ParentRewardModal = props => {
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
            onClick={() => props.dispatch(toggleParentDetails(true, false, props.chosenCard))}
            style={props.detailView ? highlight : null}
          >DETAILS</button>
          <button 
            className='edit-task-tab' 
            disabled={props.isEditing}
            onClick={() => props.dispatch(toggleParentDetails(false, true, props.chosenCard))}
            style={props.isEditing ? highlight : null}
          >EDIT TASK</button> 
        </div>
      </section>
      <div className='modal-content'>
        {props.detailView ? <ParentRewardDetails /> : 
            props.isEditing ? <EditRewardForm /> : null}
        
      </div>
      <button className='close' onClick={() => props.dispatch(toggleParentDetails())}>Close</button>
    </div>
  );
};

export default connect(mapStateToProps)(ParentRewardModal);