import React from 'react';
import { useCharacter, useHaunt } from '../../hooks/gameContext';
import CharacterWithStats from '../character/CharacterWithStats';


const  GameBoard = () => {

  const character = useCharacter();
  const haunt = useHaunt();

  return (
    <section>
      <CharacterWithStats character={character}/>
      <CharacterWithStats character={haunt}/>
    </section>
  );
};



export default GameBoard;

