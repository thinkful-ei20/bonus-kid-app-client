import React from 'react';
import { shallow } from 'enzyme';
// import {reduxForm} from 'redux-form';

import { ChildLoginForm } from '../../components/Forms/ChildLoginForm';

describe('<ChildLoginForm/>', function(){
  
  it('Renders without crashing', function(){
    const handleSubmit = () => {};
    shallow(<ChildLoginForm handleSubmit={handleSubmit}/>);
  });
});