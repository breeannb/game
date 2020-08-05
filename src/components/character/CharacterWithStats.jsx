import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import Stats from '../stats/Stats';

const CharacterWithStats = ({ character }) => (
  
  <section>
    This is the StatsCharacter page
    <Character image={character.image} />
    <Stats
      speed={character.speed}
      might={character.might}
      sanity={character.sanity}
      knowledge={character.knowledge}
    />
  </section>
);

CharacterWithStats.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    might: PropTypes.number.isRequired,
    sanity: PropTypes.number.isRequired,
    knowledge: PropTypes.number.isRequired
  })
};

export default CharacterWithStats;
