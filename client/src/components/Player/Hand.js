import React from 'react';
import Card from "./Card";

const Hand = (props) => {
    const cardsArray = []
    for (let i = 0; i < props.cardsData.length; i++ ) {
        cardsArray.push(<Card key={i} cardValue = {props.cardsData[i]}/>)
    }

    return (
        <div className="player-hand">
            {cardsArray}
        </div>
    );
};

export default Hand;