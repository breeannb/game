import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ hp, attack, defense, magic, strength, items  }) => {
  return (
    <section>
      <p>HP: {hp}</p>
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
      <p>Magic: {magic}</p>
      <p>Strength: {strength}</p>
      <p>Items: {items}</p>
    </section>
  );
};

Stats.propTypes = {
  hp: PropTypes.number.isRequired, 
  attack: PropTypes.number.isRequired, 
  defense: PropTypes.number.isRequired, 
  magic: PropTypes.number.isRequired,
  strength: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,

};

export default Stats;

