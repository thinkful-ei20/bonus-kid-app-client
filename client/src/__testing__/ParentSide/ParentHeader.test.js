import React from 'react';
import { shallow } from 'enzyme';

import { ParentHeader } from '../../components/ParentSide/ParentHeader';

describe('<ParentHeader/>', function(){
  it('Renders without crashing', function(){
    const user = {
    }
    shallow(<ParentHeader user={user}/>);
  });
});