import React from 'react';
import { shallow } from 'enzyme';

import { ParentLoginForm } from '../../components/Forms/ParentLoginForm';

describe('<ParentLoginForm/>', function(){
  
  it('Renders without crashing', function(){
    const handleSubmit = () => {};
    shallow(<ParentLoginForm handleSubmit={handleSubmit}/>);
  });
});