import React from 'react';
import { shallow } from 'enzyme';

import {LandingSideNav} from '../../components/Landing/LandingSideNav';

describe('<LandingSideNav/>', function(){
  it('Renders without crashing', function(){
    shallow(<LandingSideNav/>);
  });
});