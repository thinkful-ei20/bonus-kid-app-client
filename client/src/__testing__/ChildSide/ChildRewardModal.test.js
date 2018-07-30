import React from 'react';
import { shallow } from 'enzyme';

import { ChildRewardModal } from '../../components/ChildSide/ChildRewardModal';

describe('<ChildRewardModal/>', function(){
  
  it('Renders without crashing', function(){
    shallow(<ChildRewardModal/>);
  });
});