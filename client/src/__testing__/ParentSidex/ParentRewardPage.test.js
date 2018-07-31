import React from 'react';
import { shallow } from 'enzyme';

import { ParentRewardPage } from '../../components/ParentSide/ParentRewardPage';

describe('<ParentRewardPage/>', function(){
  it('Renders without crashing', function(){

    shallow(<ParentRewardPage />);
  });
});