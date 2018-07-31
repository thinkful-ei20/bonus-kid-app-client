import React from 'react';
import { shallow } from 'enzyme';

import { ParentSignupForm } from '../../components/Forms/ParentSignupForm';

describe('<ParentSignupForm/>', function(){
  
  it('Renders without crashing', function(){
    const handleSubmit = () => {};
    shallow(<ParentSignupForm handleSubmit={handleSubmit}/>);
  });
});