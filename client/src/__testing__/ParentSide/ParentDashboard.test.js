import React from 'react';
import { shallow } from 'enzyme';

import { ParentDashboard } from '../../components/ParentSide/ParentDashboard';

describe('<ParentDashboard/>', function(){
  it('Renders without crashing', function(){
    shallow(<ParentDashboard/>);
  });
});