import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {postReward} from '../actions/rewards';
//import {nonEmpty, isTrimmed, required} from '../validators';

export class RewardsForm extends React.Component{
  //onSubmit

  onSubmit(values){
    console.log('button clicked');
    const {name, points} = values;
    console.log('name', name, 'points', points)
    return this.props
      .dispatch(postReward(values));
  }

  render(){

    return(
      <form
        className="form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
      )}>
        <label htmlFor='name'> Name </label>
        <Field 
          component={Input}
          type="name"
          name="name"
        />
        <label htmlFor='points'>Points</label>
        <Field
          component={Input}
          type="points"
          name="points"
        />
        <button
          type='submit'
          disabled={this.props.pristine || this.props.submitting}>
          Add Reward
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form:'reward',
  onSubmitFail:(error,dispatch) => {
    console.log(error)
    dispatch(focus('reward', Object.keys(error)[0]))
  }
})(RewardsForm);


