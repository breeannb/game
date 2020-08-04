import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ speed, might, sanity, knowledge  }) => {
  return (
    <section>
      <p>Speed: {speed}</p>
      <p>Might: {might}</p>
      <p>Sanity: {sanity}</p>
      <p>Knowledge: {knowledge}</p>
    </section>
  );
};

Stats.propTypes = {
  speed: PropTypes.number.isRequired, 
  might: PropTypes.number.isRequired, 
  sanity: PropTypes.number.isRequired, 
  knowledge: PropTypes.number.isRequired,
};

export default Stats;

