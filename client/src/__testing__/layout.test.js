import React from 'react';

import { shallow } from 'enzyme';

import { Layout } from '../components/Layout';

describe ('<Layout/>', function() {
  it('Renders without crashing', function(){
    shallow(<Layout/>);
  });
});