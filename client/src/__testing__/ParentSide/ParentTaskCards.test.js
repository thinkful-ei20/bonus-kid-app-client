import React from 'react';
import { shallow } from 'enzyme';

import { ParentTaskCards } from '../../components/ParentSide/ParentTaskCards';

describe('<ParentTaskCards/>', function(){
  it('Renders without crashing', function(){
    const user = {
      name:'test',
      child: [
        {
          // name:'testKid',
          // currentPoints: 100,
          // totalPoints:150,
          id: 'does not matter what is here',
          tasks: [
            {
              id: null,
              // complete: false,
              // childComplete:false,
              // name: 'rewardTestName'
            }
          ]
        }
      ]
    }
    shallow(<ParentTaskCards user={user}/>);
  });
});