import React from 'react';
import { shallow } from 'enzyme';

import { ChildTaskCards } from '../../components/ChildSide/ChildRewardCards';

describe('<ChildTaskCards/>', function(){

  it('Renders without crashing', function(){
    const user = {
      rewards: [
        {
          id: '5b5d014829d7fa1ec115570z',
          // purchased: true,
          // pointValue: 50,
          // name: 'rewardTestName'
        }
      ]
    }
    shallow(<ChildTaskCards user={user}/>);
  });
});