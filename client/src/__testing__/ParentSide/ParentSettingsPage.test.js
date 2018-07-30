import React from 'react';
import { shallow } from 'enzyme';

import { ParentSettingsPage } from '../../components/ParentSide/ParentSettingsPage';

describe('<ParentSettingsPage/>', function(){
  it('Renders without crashing', function(){

    shallow(<ParentSettingsPage />);
  });
});