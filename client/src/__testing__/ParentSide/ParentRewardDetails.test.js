import React from 'react';
import { shallow } from 'enzyme';

import { ParentRewardDetails } from '../../components/ParentSide/ParentRewardDetails';

describe('<ParentRewardDetails/>', function(){
  it('Renders without crashing', function(){
    const rewardDetail = {
      // name: 'test',
      // purchased: false,
      // pointValue: 100,
      // expiryDate: 1532822891670
    }
    shallow(<ParentRewardDetails rewardDetail={rewardDetail}/>);
  });
});