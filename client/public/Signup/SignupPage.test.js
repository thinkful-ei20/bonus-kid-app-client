import React from 'react';
import { shallow } from 'enzyme';

import { SignupPage } from '../../components/Signup/SignupPage';

describe('<SignupPage/>', function(){
  
  it('Renders without crashing', function(){
    shallow(<SignupPage/>);
  });
});