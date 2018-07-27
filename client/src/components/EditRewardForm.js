import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from './Input';
import {required, nonEmpty} from '../validators';

import { editRewards } from '../actions/rewards';
import { isEditing } from '../actions';

const mapStateToProps = state => ({
  isEditing: state.main.isEditing.editing,
  id: state.main.isEditing.id,
  name: state.main.isEditing.name
});

export class EditRewardForm extends React.Component {
  render(){
    let error;
    if(this.props.error){
      error = (<div className='form-error'>{this.props.error}</div>);
    }
    return (
      <div className={this.props.isEditing ? 'visible edit-menu' : 'edit-menu'}
        onSubmit={this.props.handleSubmit(values => {
          this.props.dispatch(isEditing());
          const {rewardName, pointValue} = values;
          const newReward = {
            name: rewardName, 
            pointValue
          };
          return this.props.dispatch(editRewards(this.props.id, newReward));
        })}>
        <form className='edit-reward-form'>
          {error}
          <label htmlFor='rewardName'>Edit Reward: </label>
          <Field component={Input} 
            name='rewardName'
            type='text' 
            id='rewardName'
            validate={[required, nonEmpty]} 
          />
          <label htmlFor='pointValue'>Edit Point Value: </label>
          <Field component={Input} 
            name='pointValue'
            type='number' 
            id='pointValue' 
            validate={[required, nonEmpty]} 
          />
          <button disabled={this.props.pristine || this.props.submitting}>
            SUBMIT CHANGES
          </button>
        </form>
        <button onClick={() => {
          this.props.reset();
          this.props.dispatch(isEditing());
        }
        }>CANCEL</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'edit-reward-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('edit-reward-form', 'rewardName'))
})(EditRewardForm));
