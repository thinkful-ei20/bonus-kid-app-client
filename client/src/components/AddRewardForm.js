import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from './Input';
import {required, nonEmpty} from '../validators';

import '../styles/edit-menu.css';
import { postReward } from '../actions/rewards';
import { isAdding } from '../actions';

const mapStateToProps = state => ({
  isAdding: state.main.isAdding.adding,
  id: state.main.isAdding.id
});

export class AddRewardForm extends React.Component {
  render(){
    let error;
    if(this.props.error){
      error = (<div className='form-error'>{this.props.error}</div>);
    }
    return (
      <div className={this.props.isAdding ? 'visible add-menu' : 'add-menu'}
        onSubmit={this.props.handleSubmit(values => {
          this.props.dispatch(isAdding());
          const {rewardName, pointValue} = values;
          const newReward = {
            name: rewardName, 
            pointValue
          };
          return this.props.dispatch(postReward(newReward));
        })}>
        <form className='add-reward-form'>
          {error}
          <label htmlFor='rewardName'>Add Reward: </label>
          <Field component={Input} name='rewardName'
            type='text' id='addRewardName'
            validate={[required, nonEmpty]} />
          <label htmlFor='pointValue'>Add Point Value: </label>
          <Field component={Input} name='pointValue'
            type='number' id='addPointValue' validate={[required, nonEmpty]} />
          <button disabled={this.props.pristine || this.props.submitting}>SUBMIT NEW REWARD</button>
        </form>
        <button onClick={() => {
          this.props.reset();
          this.props.dispatch(isAdding());
        }
        }>CANCEL</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'add-reward-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('add-reward-form', 'rewardName'))
})(AddRewardForm));
