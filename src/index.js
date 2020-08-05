import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import GameProvider from './provider/GameProvider';

render(
  // to add global state and dispatch, bringing in provider here so all children of app will now have access to it
  <GameProvider>
    <App />
  </GameProvider>,
  
  document.getElementById('root')
);
