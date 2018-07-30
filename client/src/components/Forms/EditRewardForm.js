import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from '../Forms/Input';

import '../../styles/edit-reward-form.css';
import { editReward, deleteRewards } from '../../actions/rewards';
import { refreshAuthToken } from '../../actions/auth';
import { toggleParentDetails } from '../../actions/toggles';

const mapStateToProps = state => ({
  isEditing: state.toggles.chosenCard.views.editing,
  id: state.toggles.chosenCard.details.reward.id,
  task: state.toggles.chosenCard.details.reward
});

export class EditRewardForm extends React.Component {
  render(){
    let error;
    if(this.props.error){
      error = (<div className='form-error'>{this.props.error}</div>);
    }
    return (
      <div className={this.props.isEditing ? 'visible edit-menu' : 'edit-menu'}>
        <form className='edit-reward-form'
          onSubmit={this.props.handleSubmit(values => {
            this.props.dispatch(toggleParentDetails());
            const {rewardName, pointValue} = values;
            const newReward = {
              name: rewardName, 
              points: pointValue
            };
            return this.props.dispatch(editReward(this.props.id, newReward));
          })}>
          {error}
          <label htmlFor='rewardName'>Edit Reward: </label>
          <Field component={Input} name='rewardName' placeholder={this.props.task.name}
            type='text' id='edit-rewardName' />
          <label htmlFor='pointValue'>Edit Point Value: </label>
          <Field component={Input} name='pointValue' placeholder={this.props.task.pointValue} 
            type='number' id='edit-rewardPointValue' />
          <button type='submit' className='edit-reward-btn' disabled={this.props.pristine || this.props.submitting}>OK</button>
          <button type='button' id='delete-reward-btn' onClick={() => {
          this.props.dispatch(deleteRewards(this.props.id))
          this.props.dispatch(refreshAuthToken());
          this.props.dispatch(toggleParentDetails());
        }
        }>DELETE</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'edit-reward-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('edit-reward-form', 'rewardName'))
})(EditRewardForm));