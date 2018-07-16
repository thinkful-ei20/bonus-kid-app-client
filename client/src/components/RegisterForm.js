import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import{registerUser} from '../actions/users';
import {required, nonEmpty} from '../validators';
import {loginParent}  from '../actions/auth';


export class RegisterForm extends React.Component {
  onSubmit(values){
    const {username, password, name, email} = values;
    const user = {name, username, email, password};
      return this.props
        .dispatch(registerUser(user))
        .then(() => this.props.dispatch(loginParent(username, password)));

  }

  render() {

      return (
        <form 
          id='register-form' 
          className='register-form' 
          onSubmit={() => this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <label htmlFor='name'>Name</label>
          <Field component={Input} type='text' name='name'/>
          <label htmlFor='email'>E-mail</label>
          <Field component={Input} type='text' name='e-mail' />
          <label htmlFor='username'>Username</label>
          <Field component={Input} type='text' name='username' />
          <label htmlFor='password'>Password</label>
          <Field component={Input} type='password' name='password'/>
          <button type='submit'  disabled={this.props.pristine || this.props.submitting}> Register </button>
        </form>
      );
    }
  }

export default reduxForm({
  form:'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus ('registration', Object.keys(errors)[0]))
})(RegisterForm);
