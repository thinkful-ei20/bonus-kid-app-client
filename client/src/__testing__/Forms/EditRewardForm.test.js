import React from 'react';
import { shallow } from 'enzyme';

import { EditRewardForm } from '../../components/Forms/EditRewardForm';

describe('<EditRewardForm/>', function(){
  
  it('Renders without crashing', function(){
    const handleSubmit = () => {};
    const task  = {};
    shallow(<EditRewardForm handleSubmit={handleSubmit} task={task}/>);
  });
});