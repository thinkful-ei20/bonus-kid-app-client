import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import{registerUser} from '../actions/users';
import {loginParent}  from '../actions/auth';
import {required, nonEmpty, isTrimmed} from '../validators';

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, name, email } = values;
    const user = { username, password, name, email };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(loginParent(username, password)));
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <label htmlFor='name'> Name </label>
        <Field
          component={Input}
          type="name"
          name="name" 
          validate={[required, nonEmpty, isTrimmed]}
        />

        <label htmlFor='email'> E-mail </label>
        <Field
          component={Input}
          type="email"
          name="email"
          validate={[required, nonEmpty, isTrimmed]}
        />

        <label htmlFor='username'> Username </label>
        <Field
          component={Input}
          type="text"
          name="username"
          validate={[required, nonEmpty, isTrimmed]}
        />

        <label htmlFor='password'> Password </label>
        <Field
          component={Input}
          type="password"
          name="password"
          validate={[required, isTrimmed]}
        />

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
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);