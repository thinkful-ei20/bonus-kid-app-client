import React from 'react';
import { shallow } from 'enzyme';

import {LandingHeader} from '../../components/Landing/LandingHeader';

describe('<LandingHeader/>', function(){
  it('Renders without crashing', function(){
    shallow(<LandingHeader/>);
  });
});