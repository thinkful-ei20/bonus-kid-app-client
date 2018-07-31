import React from 'react';
import { shallow } from 'enzyme';

import  Input  from '../../components/Forms/Input';

describe('<Input/>', function(){
  const meta ={}
  const input ={}

  it('Renders without crashing', function(){
    shallow(<Input meta={meta} input={input}/>);  });
});