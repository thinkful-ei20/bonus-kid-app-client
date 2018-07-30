import React from 'react';
import { shallow } from 'enzyme';

import { ParentRewardModal } from '../../components/ParentSide/ParentRewardModal';

describe('<ParentRewardModal/>', function(){
  it('Renders without crashing', function(){

    shallow(<ParentRewardModal />);
  });
});