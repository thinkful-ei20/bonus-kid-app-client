import React from 'react';
import { shallow } from 'enzyme';

import { EditTaskForm } from '../../components/Forms/EditTaskForm';

describe('<EditTaskForm/>', function(){
  
  it('Renders without crashing', function(){
    const handleSubmit = () => {};
    const task  = {};
    shallow(<EditTaskForm handleSubmit={handleSubmit} task={task}/>);  
  });
  
});