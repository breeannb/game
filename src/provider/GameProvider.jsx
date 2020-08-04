import React from 'react';
import { GameContext } from '../hooks/gameContext';
import reducer, { initialState } from '../reducer/gameReducer';

const GameProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children} 
    </GameContext.Provider>
  );
};

export default GameProvider;

