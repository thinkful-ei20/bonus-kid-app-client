import React from 'react';
import { shallow } from 'enzyme';

import { ChildHeader } from '../../components/ChildSide/ChildHeader';

describe('<ChildHeader/>', function(){

  it('Renders without crashing', function(){
    const user = {
    }
    shallow(<ChildHeader user={user}/>);
  });

  it('has header className', () => {
    const user = {
    }
    const wrapper = shallow(<ChildHeader user={user}/>);
    expect(wrapper.hasClass('header')).toEqual(true);
  });
});