import React from 'react';
import { shallow } from 'enzyme';

import { ChildSignupForm } from '../../components/Forms/ChildSignupForm';

describe('<ChildSignupForm/>', function(){
  
  it('Renders without crashing', function(){
    const handleSubmit = () => {};
    shallow(<ChildSignupForm handleSubmit={handleSubmit}/>);
  });
});