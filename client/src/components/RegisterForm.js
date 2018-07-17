import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import{registerUser} from '../actions/users';
import {loginParent}  from '../actions/auth';
import {required, nonEmpty, length, isTrimmed} from '../validators';
const usernameLength = length({min: 1, max: 20});
const passwordLength = length({min: 10, max: 72});


export class RegistrationForm extends React.Component {
   
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
                id="register-form"
                className="form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">Name</label>
                <Field component={Input} type="text" name="name" />
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required,usernameLength, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
               
                <button className="button"
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
