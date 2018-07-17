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

        <fieldset className="register-fieldset">
          <Field
              label='Name'
              component={Input}
              type="name"
              name="name" />

            <Field
              label='Email Address'
              component={Input}
              type="email"
              name="email" />

            <Field
              label='Username'
              component={Input}
              type="text"
              name="username"
              validate={[required, nonEmpty, isTrimmed]}
            />

            <Field
              label='Password'
              component={Input}
              type="password"
              name="password"
              validate={[required, passwordLength, isTrimmed]}
            />

        </fieldset>
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