import React from 'react';

export default class Input extends React.Component {
  componentDidUpdate(prevProps){
    if(!prevProps.meta.active && this.props.meta.active){
      this.input.focus();
    }
  }
  render(){
    let error; let warning;
    const errStyle = { borderColor: '#c78181' };
    if(this.props.meta.touched && this.props.meta.error){
      error = (<div className='form-warning'>{this.props.meta.error}</div>);
    }
    if(this.props.meta.touched && this.props.meta.warning){
      warning = (<div className='form-error'>{this.props.meta.warning}</div>);
    }
    return(
      <div className='form-input'>
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </label>
        <input {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          style={error ? errStyle : null}
          ref={input => (this.input=input)} />
      </div>
    );
  }
}