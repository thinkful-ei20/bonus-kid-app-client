import React from 'react';
import { shallow } from 'enzyme';

import { ChildTaskModal } from '../../components/ChildSide/ChildTaskModal';

describe('<ChildTaskModal/>', function(){
  
  it('Renders without crashing', function(){

    shallow(<ChildTaskModal />);
  });
});