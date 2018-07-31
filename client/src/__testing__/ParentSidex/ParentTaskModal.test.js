import React from 'react';
import { shallow } from 'enzyme';

import { ParentTaskModal } from '../../components/ParentSide/ParentTaskModal';

describe('<ParentTaskModal/>', function(){
  it('Renders without crashing', function(){

    shallow(<ParentTaskModal/>);
  });
});