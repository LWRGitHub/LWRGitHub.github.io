import React from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

const App = (props) => {
  // const highScore = this.getHighScore();

  return (
    <div className="scoreboard">
      <Header />
      <PlayerList /> 
      <AddPlayerForm />
    </div>
  );
}

export default App;