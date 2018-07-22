import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from './Input';
import {loginParent} from '../actions/auth';
import {required, nonEmpty} from '../validators';

import '../styles/edit-menu.css';

const mapStateToProps = state => ({
  isEditing: state.main.isEditing.editing
});

export class LoginForm extends React.Component {
  render(){
    let error;
    if(this.props.error){
      error = (<div className='form-error'>{this.props.error}</div>);
    }
    console.log(this.props);
    return (
      <div className={this.props.isEditing ? 'visible edit-menu' : 'edit-menu'}
        onSubmit={this.props.handleSubmit(values => console.log(values))}>
        <form className='edit-task-form'>
          {error}
          <label htmlFor='taskName'>Edit Task: </label>
          <Field component={Input} name='taskName'
            type='text' id='taskName'
            validate={[required, nonEmpty]} />
          <label htmlFor='pointValue'>Edit Point Value: </label>
          <Field component={Input} name='pointValue'
            type='number' id='pointValue' validate={[required, nonEmpty]} />
          <button disabled={this.props.pristine || this.props.submitting}>SUBMIT CHANGES</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'edit-task-form',
  onSubmitFail: (errors, dispatch) => dispatch(focus('edit-task-form', 'taskName'))
})(LoginForm));
