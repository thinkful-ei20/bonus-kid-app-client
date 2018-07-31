import React from 'react';
import { shallow } from 'enzyme';

import { AddTaskForm } from '../../components/Forms/AddTaskForm';

describe('<AddTaskForm/>', function(){
  
  it('Renders without crashing', function(){
    const handleSubmit = () => {};
    shallow(<AddTaskForm handleSubmit={handleSubmit}/>);
  });
});