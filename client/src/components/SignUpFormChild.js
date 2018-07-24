import Input from './Input';
import React from 'react';

import {Field, focus, reduxForm} from 'redux-form';
import {isTrimmed, matches, nonEmpty, required} from '../validators';
import { registerChild }  from '../actions/auth';

const matchesPassword = matches('signupPassword');

export class SignUpFormChild extends React.Component {
  render() {
    return (
      <form
        className='signup-form-child'
        onSubmit={this.props.handleSubmit(values => {
          const { signupUsername, signupPassword, signupName, signupEmail } = values;
          const user = { 
            username: signupUsername, 
            password: signupPassword, 
            name: signupName, 
            email: signupEmail 
          };
          console.log('user: ', user);
          
          return this.props.dispatch(registerChild(user)); 
                     
        }
        )}>
        <label htmlFor='signupName'> Child's Name </label>
        <Field component={Input} type='text'
          name='signupName' id='signupName'
          validate={[required, nonEmpty, isTrimmed]}
        />
        {/* <label htmlFor='signupEmail'> Child's E-mail </label>
        <Field component={Input} type='signupEmail'
          name='signupEmail' id='signupEmail'
          validate={[required, nonEmpty, isTrimmed]}
        /> */}
        <label htmlFor='signupUsername'> Child's Username </label>
        <Field component={Input} type='text'
          name='signupUsername' id='signupUsername'
          validate={[required, nonEmpty, isTrimmed]}
        />

        <label htmlFor='signupPassword'> Child's Password </label>
        <Field component={Input} type='password'
          name='signupPassword' id='signupPassword'
          validate={[required, isTrimmed]}
        />
        <label htmlFor='signupConfirmPassword' aria-label='signupConfirmPassword'>Confirm Child's Password</label>
        <Field type='password' component={Input}
          name='signupConfirmPassword' id='signupConfirmPassword'
          validate={[required, nonEmpty, matchesPassword]}/>
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Register Child
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signup-form-child',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signup-form-child', Object.keys(errors)[0]))
})(SignUpFormChild);