import React from 'react';
import { shallow } from 'enzyme';

import {ParentTaskCards} from '../../components/ParentSide/ParentRewardCards';

describe('<ParentTaskCards/>', function(){

  it('Renders without crashing', function(){
    const user = {
      name:'test',
      child: [
        {
          // name:'testKid',
          // currentPoints: 100,
          // totalPoints:150,
          id: '5b5d014829d7fa1ec115570d',
          rewards: [
            {
              id: '5b5d014829d7fa1ec115570z',
              // purchased: true,
              // pointValue: 50,
              // name: 'rewardTestName'
            }
          ]
        }
      ]
    }
    shallow(<ParentTaskCards user={user}/>);
  });
});