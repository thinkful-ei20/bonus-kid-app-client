import React from 'react';
import { shallow } from 'enzyme';

import { ChildTaskCards } from '../../components/ChildSide/ChildTaskCards';

describe('<ChildTaskCards/>', function(){
  
  it('Renders without crashing', function(){
    const user = {
      tasks: []
      }
    shallow(<ChildTaskCards user={user}/>);
  });
});