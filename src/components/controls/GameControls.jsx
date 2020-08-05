import React from 'react';
import styles from './GameControls.css';
import { useDispatch } from '../../hooks/gameContext';

const GameControls = () => {
  const dispatch = useDispatch();

  return (
    <section className={styles.GameControls}>
      <button onClick={() => dispatch({ type: 'ATTACK_HAUNT' })}>Attack Speed</button>
      <button>Might</button>
      <button>Sanity</button>
      <button>Knowledge</button>
    </section>
  );
};

export default GameControls;

