import React from 'react';
import Name from "./Name";
import Hand from "./Hand";
import Score from "./Score";

const Player = (props) => {
    let playerClass = '';
    if (props.playerData.player === props.playerData.currentPlayer + '') {
        playerClass = 'active';
    }

    return (
        <div className={props.playerData.handValue > 21 ? "player lost" : "player " + playerClass}>
            <Name nameData = {props.playerData.playerName} />
            <Hand cardsData = {props.playerData.cards} />
            <Score scoreData = {props.playerData.handValue}/>
        </div>
    );
};

export default Player;