import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {loginParent, loginChild} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {

  onSubmit(values){
    if(this.submittedButton === 'parentLogin'){
      this.props.dispatch(loginParent(values.username, values.password));
    } else if (this.submittedButton === 'childLogin'){
      this.props.dispatch(loginChild(values.username, values.password));      
    }
  }

  render(){
    let error;
    if(this.props.error){
      error = (<div className='form-error'>{this.props.error}</div>);
    }
    return (
      <form className='parent-login-form' 
        onSubmit={this.props.handleSubmit(
          values => this.props.dispatch(loginParent(values.username, values.password)))}>
        {error}
        <label htmlFor='username'>Username</label>
        <Field component={Input} name='username'
          type='text' id='username' validate={[required, nonEmpty]} />
        <label htmlFor='password'>Password</label>
        <Field component={Input} name='password'
          type='password' id='password' validate={[required, nonEmpty]} />
        <button 
          disabled={this.props.pristine || this.props.submitting}
          onClick={() => this.submittedButton = 'childLogin'}
        >
          LOG IN
        </button>
        <button 
          disabled={this.props.pristine || this.props.submitting}
          onClick={() => this.submittedButton = 'parentLogin'}
        >
          Parent Log In
        </button>

      </form>
    );
  }
}

export default reduxForm({
  form: 'parent-login-form',
  onSubmitFail: (error, dispatch) => dispatch(focus('parent-login-form', 'username'))
})(LoginForm);
