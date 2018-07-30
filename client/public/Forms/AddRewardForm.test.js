import React from 'react';
import { shallow } from 'enzyme';

import { AddRewardForm } from '../../components/Forms/AddRewardForm';

describe('<AddRewardForm/>', function(){
  
  it('Renders without crashing', function(){
    const handleSubmit = () => {};
    shallow(<AddRewardForm handleSubmit={handleSubmit}/>);
  });
});