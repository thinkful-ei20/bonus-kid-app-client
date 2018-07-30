import Input from '../Forms/Input';
import React from 'react';

import {Field, focus, reduxForm} from 'redux-form';
import {isTrimmed, matches, nonEmpty, required} from '../../validators';
import {loginParent, registerUser}  from '../../actions/auth';

import '../../styles/parent-signup-form.css';

const matchesPassword = matches('signupPassword');

export class ParentSignupForm extends React.Component {
  render() {
    return (
      <form
        className='parent-signup-form'
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
        <h3 className='parent-form-heading'>Create an account</h3>
        <div className='parent-form-body'>
          <label htmlFor='signupName'> Name </label>
          <Field component={Input} type='text'
            name='signupName' id='parent-signupName'
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor='signupEmail'> E-mail </label>
          <Field component={Input} type='signupEmail'
            name='signupEmail' id='parent-signupEmail'
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor='signupUsername'> Username </label>
          <Field component={Input} type='text'
            name='signupUsername' id='parent-signupUsername'
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor='signupPassword'> Password </label>
          <Field component={Input} type='password'
            name='signupPassword' id='parent-signupPassword'
            validate={[required, isTrimmed]}
          />
          <label htmlFor='signupConfirmPassword' aria-label='signupConfirmPassword'>Confirm Password</label>
          <Field type='password' component={Input}
            name='signupConfirmPassword' id='parent-signupConfirmPassword'
            validate={[required, nonEmpty, matchesPassword]}/>
          <button
            type="submit" className='parent-signup-btn'
            disabled={this.props.pristine || this.props.submitting}>
          OK
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'parent-signup-form',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('parent-signup-form', Object.keys(errors)[0]))
})(ParentSignupForm);