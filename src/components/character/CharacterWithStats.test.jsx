import React from 'react';
import { shallow } from 'enzyme';
import CharacterWithStats from './CharacterWithStats';

describe('CharacterWithStats component', () => {
  it('renders CharacterWithStats', () => {
    const character = {
      image: 'imageOne.jpeg',
      speed: 3,
      might: 4,
      sanity: 10,
      knowledge: 3
    };
    const wrapper = shallow(<CharacterWithStats character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
