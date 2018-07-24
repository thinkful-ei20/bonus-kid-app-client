import React from 'react';
import {connect} from 'react-redux';
import '../styles/modals.css';
import { toggleModal } from '../actions';

const mapStateToProps = state => ({
  taskModal: state.main.modalView.tasks
});
export const ParentTaskModal = props => (
  <div className={`modal ${props.taskModal ? 'visible': ''}`}>
    <div className='modal-content'>
      <h2>Testing</h2>
      <button onClick={() => props.dispatch(toggleModal())}>Close</button>
    </div>
  </div>
);

export default connect(mapStateToProps)(ParentTaskModal);