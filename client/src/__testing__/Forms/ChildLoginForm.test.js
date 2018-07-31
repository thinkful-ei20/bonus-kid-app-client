import React from 'react';
import { shallow } from 'enzyme';
// import {reduxForm} from 'redux-form';

import { ChildLoginForm } from '../../components/Forms/ChildLoginForm';
import { loginChild } from '../../actions/auth';

describe('<ChildLoginForm/>', function(){
  
  it('Renders without crashing', function(){
    const handleSubmit = () => {};
    shallow(<ChildLoginForm handleSubmit={handleSubmit}/>);
  });

  // it('Should dispatch loginChild', () => {
  //   const dispatch = jest.fn();
  //   const handleSubmit = () => {};
  //   const wrapper = shallow(<ChildLoginForm handleSubmit={handleSubmit}/>); 
  //   const button = wrapper.find('.login-btn');   
  //   button.simulate('click'); 
  //   expect(dispatch).toHaveBeenCalledWith(handleSubmit())
  // });

});