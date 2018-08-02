import React from 'react';
import { shallow } from 'enzyme';

import { ChildHeader } from '../../components/ChildSide/ChildRewardHeader';

describe('<ChildHeader/>', function(){
  
  it('Renders without crashing', function(){
    const user = {
    }
    shallow(<ChildHeader user={user}/>);
  });
});