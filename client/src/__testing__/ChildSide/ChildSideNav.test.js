import React from 'react';
import { shallow } from 'enzyme';

import { ChildSideNav } from '../../components/ChildSide/ChildSideNav';

describe('<ChildSideNav/>', function(){
  
  it('Renders without crashing', function(){
    const user = {
      }
    shallow(<ChildSideNav user={user}/>);
  });
});