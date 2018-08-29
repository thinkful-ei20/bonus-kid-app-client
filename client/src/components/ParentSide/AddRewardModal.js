import React from 'react';
import {connect} from 'react-redux';
import '../../styles/modals.css';
// import '../../styles/add-reward-form.css';
import { toggleAddRewardForm } from '../../actions/toggles';

import AddRewardForm from '../Forms/AddRewardForm';

const mapStateToProps = state => ({
  isAdding: state.toggles.addRewardView.adding,
  id: state.toggles.addRewardView.id
});
export const AddTaskModal = props => {
  return(
  <div className={`modal ${props.isAdding ? 'visible': ''}`}>
    <div className='modal-content-add-form-container add-task'>
      <AddRewardForm />
    </div>
    <button className='close-add-form' onClick={() => props.dispatch(toggleAddRewardForm())}>
      Cancel</button>
  </div>
);

}

export default connect(mapStateToProps)(AddTaskModal);