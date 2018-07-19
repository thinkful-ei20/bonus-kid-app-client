import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {postTask} from '../actions/tasks';
//import {nonEmpty, isTrimmed, required} from '../validators';

export class TasksForm extends React.Component{
  //onSubmit

  onSubmit(values){
    console.log('button clicked');
    const  {name, points} = values;
    return this.props
      .dispatch(postTask(values));
  }

  render(){

    return(
      <form
        className="form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
      )}>
        <label htmlFor='name'> Name </label>
        <Field 
          component={Input}
          type="name"
          name="name"
        />
        <label htmlFor='points'>Points</label>
        <Field
          component={Input}
          type="points"
          name="points"
        />
        <button
          type='submit'
          disabled={this.props.pristine || this.props.submitting}>
          Add Task
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form:'Tasks',
  onSubmitFail:(error,dispatch) => {
    console.log(error)
    dispatch(focus('Tasks', Object.keys(error)[0]))
  }
})(TasksForm);


