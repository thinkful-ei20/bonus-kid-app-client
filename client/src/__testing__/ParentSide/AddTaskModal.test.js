import React from 'react';
import { shallow } from 'enzyme';

import {AddTaskModal} from '../../components/ParentSide/AddTaskModal';
import { toggleAddTaskForm } from '../../actions/toggles';

describe('<AddTaskModal/>', function(){
  it('Renders without crashing', function(){
    shallow(<AddTaskModal/>);
  });

  it('render CANCEL button', () => {
    const wrapper = shallow(<AddTaskModal/>);
    expect(wrapper.find('.close').exists()).toEqual(true);
  });

  it('CANCEL button dispatch toggleAddTaskForm when clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<AddTaskModal dispatch={dispatch}/>);
    const button = wrapper.find('.close');   
    button.simulate('click'); 
    expect(dispatch).toHaveBeenCalledWith(toggleAddTaskForm());
  })


});