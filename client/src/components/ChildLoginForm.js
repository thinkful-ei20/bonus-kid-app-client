import Input from './Input';
import React from 'react';

import {Field, reduxForm, focus} from 'redux-form';
import {loginChild} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class ChildLoginForm extends React.Component {
  render(){
    let error;
    if(this.props.error){
      error = (<div className='form-error'>{this.props.error}</div>);
    }
    return (
      <form className='child-login-form' 
        onSubmit={this.props.handleSubmit(values => {
          const {childUsername, childPassword} = values;
          return this.props.dispatch(loginChild(childUsername, childPassword));
        })}>
        {error}
        <label htmlFor='childUsername'>Child Username</label>
        <Field component={Input} name='childUsername'
          type='text' id='childUsername' validate={[required, nonEmpty]} />
        <label htmlFor='childPassword'>Child Password</label>
        <Field component={Input} name='childPassword'
          type='password' id='childPassword' validate={[required, nonEmpty]} />
        <button disabled={this.props.pristine || this.props.submitting}>LOG IN</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'child-login-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('child-login-form', 'childUsername'))
})(ChildLoginForm);