import React from 'react';
import {connect} from 'react-redux';

export class Input extends React.Component{
  componentDidUpdate(prevProps){
    if(!prevProps.meta.active && this.props.meta.active){
      this.input.focus();
    }
  }
  render(){
    let error; let warning;
    if(this.props.meta.touched && this.props.meta.warning){
      warning = (<div className='form-warning'>{this.props.meta.warning}</div>);
    }

    if(this.props.meta.touched && this.props.meta.error){
      error = (<div className='form-error'>{this.props.meta.error}</div>);
    }

    const errStyle = {border: 'red 2px solid'};
    return(
      <div className='form-input'>
        {error}
        {warning}
        <input {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          style={error ? errStyle : null}
          ref={input => (this.input=input)} />
      </div>
    );
  }
}

export default connect()(Input);