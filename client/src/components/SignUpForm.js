import Input from './Input';
import React from 'react';

import {Field, focus, reduxForm} from 'redux-form';
import {isTrimmed, matches, nonEmpty, required} from '../validators';
import {loginParent, registerUser}  from '../actions/auth';

const matchesPassword = matches('signupPassword');

export class SignUpForm extends React.Component {
  render() {
    return (
      <form
        className='signup-form'
        onSubmit={this.props.handleSubmit(values => {
          const { signupUsername, signupPassword, signupName, signupEmail } = values;
          const user = { 
            username: signupUsername, 
            password: signupPassword, 
            name: signupName, 
            email: signupEmail 
          };
          return this.props.dispatch(registerUser(user))
            .then(() => this.props.dispatch(loginParent(signupUsername, signupPassword)));
        }
        )}>
        <label htmlFor='signupName'> Name </label>
        <Field component={Input} type='text'
          name='signupName' id='signupName'
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor='signupEmail'> E-mail </label>
        <Field component={Input} type='signupEmail'
          name='signupEmail' id='signupEmail'
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor='signupUsername'> Username </label>
        <Field component={Input} type='text'
          name='signupUsername' id='signupUsername'
          validate={[required, nonEmpty, isTrimmed]}
        />

        <label htmlFor='signupPassword'> Password </label>
        <Field component={Input} type='password'
          name='signupPassword' id='signupPassword'
          validate={[required, isTrimmed]}
        />
        <label htmlFor='signupConfirmPassword' aria-label='signupConfirmPassword'>Confirm Password</label>
        <Field type='password' component={Input}
          name='signupConfirmPassword' id='signupConfirmPassword'
          validate={[required, nonEmpty, matchesPassword]}/>
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Register
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signup-form',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signup-form', Object.keys(errors)[0]))
})(SignUpForm);