import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from '../Forms/Input';
import {required, nonEmpty} from '../../validators';

import '../../styles/add-form.css';
import { postReward } from '../../actions/rewards';
import { toggleAddRewardForm } from '../../actions/toggles';

const mapStateToProps = state => ({
  isAdding: state.toggles.addRewardView.adding,
  id: state.toggles.addRewardView.id
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
          const {rewardName, pointValue} = values;
          const newReward = {
            name: rewardName, 
            pointValue
          };
          this.props.reset();
          this.props.dispatch(toggleAddRewardForm());
          return this.props.dispatch(postReward(this.props.id, newReward));
        })}>
        <h3 className='add-form-heading'>Add A Reward</h3>
        <form className='add-form'>
          <div className='add-form-body'>
            {error}
            <label htmlFor='rewardName'>Reward: </label>
            <Field component={Input} name='rewardName'
              type='text' id='addrewardName' placeholder='ex. A trip to the movies'
              validate={[required, nonEmpty]} />
            <label htmlFor='pointValue'>Point Value: </label>
            <Field component={Input} name='pointValue' placeholder='ex. 100'
              type='number' id='addRewardPointValue' validate={[required, nonEmpty]} />
            <button className='add-btn' disabled={this.props.pristine || this.props.submitting}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'add-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('add-form', 'rewardName'))
})(AddRewardForm));
