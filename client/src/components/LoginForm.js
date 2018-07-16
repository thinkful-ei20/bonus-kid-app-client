import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {loginParent} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
  render(){
    let error;
    if(this.props.error){
      error = (<div className='form-error'>{this.props.error}</div>);
    }
    return (
      <form className='parent-login-form' onSubmit={this.props.handleSubmit(values => this.props.dispatch(loginParent(values.username, values.password)))}>
        {error}
        <label htmlFor='username'>Username</label>
        <Field component={Input} name='username'
          type='text' id='username' validate={[required, nonEmpty]} />
        <label htmlFor='password'>Password</label>
        <Field component={Input} name='password'
          type='password' id='password' validate={[required, nonEmpty]} />
        <button disabled={this.props.pristine || this.props.submitting}>LOG IN</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'parent-login-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('parent-login-form', 'username'))
})(LoginForm);
