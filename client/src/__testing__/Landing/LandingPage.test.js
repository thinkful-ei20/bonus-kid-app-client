import React from 'react';
import { shallow, MemoryRouter } from 'enzyme';
import { Link } from 'react-router';

import {LandingPage} from '../../components/Landing/LandingPage';

describe('<LandingPage/>', function(){

  it('Renders without crashing', function(){
    shallow(<LandingPage/>);
  });

  // it('included link to /signup', function(){
  //   const wrapper = shallow(<MemoryRouter><LandingPage/></MemoryRouter>);
  //   expect(wrapper).toContainReact(<Link to="/signup">sign up here</Link>)
  // });

});