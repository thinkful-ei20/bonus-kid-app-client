import Input from './Input';
import React from 'react';

import {Field, focus, reduxForm} from 'redux-form';
import {loginParent} from '../actions/auth';
import {nonEmpty, required} from '../validators';

export class ParentLoginForm extends React.Component {
  render(){
    let error;
    if(this.props.error){
      error = (<div className='form-error'>{this.props.error}</div>);
    }
    return (
      <form className='parent-login-form' 
        onSubmit={this.props.handleSubmit(
          values => this.props.dispatch(loginParent(values.parentUsername, values.parentPassword)))}>
        {error}
        <label htmlFor='parentUsername'>Username</label>
        <Field component={Input} name='parentUsername'
          type='text' id='parentUsername' validate={[required, nonEmpty]} />
        <label htmlFor='parentPassword'>Password</label>
        <Field component={Input} name='parentPassword'
          type='password' id='parentPassword' validate={[required, nonEmpty]} />
        <button disabled={this.props.pristine || this.props.submitting}>LOG IN</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'parent-login-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('parent-login-form', 'parentUsername'))
})(ParentLoginForm);