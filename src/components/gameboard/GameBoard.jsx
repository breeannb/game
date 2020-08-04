import React from 'react';
import { useCharacter, useHaunt } from '../../hooks/gameContext';
import CharacterWithStats from '../character/CharacterWithStats';
import styles from './Gameboard.css';


const  GameBoard = () => {

  const character = useCharacter();
  const haunt = useHaunt();

  return (
    <section className={styles.GameBoard}>
      <CharacterWithStats character={character}/>
      <CharacterWithStats character={haunt}/>
    </section>
  );
};



export default GameBoard;

