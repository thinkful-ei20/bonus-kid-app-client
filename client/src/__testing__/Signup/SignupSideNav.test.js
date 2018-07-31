import React from 'react';
import { shallow } from 'enzyme';

import { SignupSideNav } from '../../components/Signup/SignupSideNav';

describe('<SignupSideNav/>', function(){
  
  it('Renders without crashing', function(){
    shallow(<SignupSideNav/>);
  });
});