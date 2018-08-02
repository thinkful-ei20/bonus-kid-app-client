import React from 'react';
import { shallow } from 'enzyme';

import { ChildRewardPage } from '../../components/ChildSide/ChildRewardPage';

describe('<ChildRewardPage/>', function(){
  
  it('Renders without crashing', function(){
    shallow(<ChildRewardPage/>);
  });
});