import React from 'react';
import { shallow } from 'enzyme';

import { ParentSideNav } from '../../components/ParentSide/ParentSideNav';

describe('<ParentSideNav/>', function(){
  it('Renders without crashing', function(){
    const user = {
      // username: 'test'
    }
    shallow(<ParentSideNav user={user}/>);
  });
});