import React from 'react';
import Player from "../Player/Player";

const GameArea = ({players}) => {
    const playersArray = []
    if (players) {
        for (let i = 0; i < players.length; i++) {
            playersArray.push(<Player key={i + 100} playerData={players[i]}/>)
        }
    }

    return (
        <div className="game-area">
            {playersArray}
        </div>
    );
};

export default GameArea;