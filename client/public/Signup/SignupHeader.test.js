import React from 'react';
import { shallow } from 'enzyme';

import { SignupHeader } from '../../components/Signup/SignupHeader';

describe('<SignupHeader/>', function(){
  
  it('Renders without crashing', function(){
    shallow(<SignupHeader/>);
  });
});