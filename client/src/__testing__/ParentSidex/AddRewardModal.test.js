import React from 'react';
import { shallow } from 'enzyme';

import {AddTaskModal} from '../../components/ParentSide/AddRewardModal';

describe('<AddTaskModal/>', function(){
  it('Renders without crashing', function(){
    shallow(<AddTaskModal/>);
  });
});