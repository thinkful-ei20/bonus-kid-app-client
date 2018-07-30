import React from 'react';
import { shallow } from 'enzyme';

import { ChildDashboard } from '../../components/ChildSide/ChildDashboard';

describe('<ChildDashboard/>', function(){
  
  it('Renders without crashing', function(){
    shallow(<ChildDashboard/>);
  });
});