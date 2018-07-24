import React from 'react';
import {connect} from 'react-redux';
import '../styles/modals.css';
import { toggleModal } from '../actions';

const mapStateToProps = state => ({
  taskModal: state.main.modalView.tasks
});
export const ChildTaskModal = props => (
  <div className={`modal ${props.taskModal ? 'visible': ''}`}>
    <div className='modal-content'>
      <p>Taskname: puthere</p>
      <p>PointValue: puthere</p>
      <p>due date: puthere</p>
      <button onClick={() => props.dispatch(toggleModal())}>Close</button>
    </div>
  </div>
);

export default connect(mapStateToProps)(ChildTaskModal);