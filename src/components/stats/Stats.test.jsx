import React from 'react';
import { shallow } from 'enzyme';
import Stats from './Stats';

describe('Stats component', () => {
  it('renders Stats', () => {
    const wrapper = shallow(<Stats />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
