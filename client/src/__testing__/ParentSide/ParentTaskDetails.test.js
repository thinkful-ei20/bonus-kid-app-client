import React from 'react';
import { shallow } from 'enzyme';

import { ParentTaskDetails } from '../../components/ParentSide/ParentTaskDetails';

describe('<ParentTaskDetails/>', function(){
  it('Renders without crashing', function(){
    const taskDetail = {
    }
    shallow(<ParentTaskDetails taskDetail={taskDetail}/>);
  });
});