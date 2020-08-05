import React from 'react';
import { useCharacter, useHaunt, useDispatch } from '../../hooks/gameContext';
import CharacterWithStats from '../character/CharacterWithStats';
import styles from './Gameboard.css';
import GameControls from '../controls/GameControls';
import { useEffect } from 'react';


const  GameBoard = () => {

  const character = useCharacter();
  const haunt = useHaunt();

  const dispatch = useDispatch();
  
  useEffect(() => {
    if(haunt.speed !== 0) return; 
    
    dispatch({ 
      type: 'SET_HAUNT', 
      // when we get to 0, set enemy to new enemy 
      payload: {
        image: 'https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/4/4b/Werewolf.jpg?version=107ad2634d01d95827ae35fbc90748de',
        speed: 200, 
        might: 200,
        sanity: 200, 
        knowledge: 200
      }
    });
  }, [haunt.speed]);
  // anytime haunt speed changes, use this above useffect 


  return (
    <section className={styles.GameBoard}>
      <CharacterWithStats character={character}/>
      <GameControls />
      <CharacterWithStats character={haunt}/>
    </section>
  );
};



export default GameBoard;

