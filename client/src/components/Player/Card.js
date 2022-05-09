import React from 'react';

const Card = (props) => {
    const gameCardSuits = {
        spaces: '♠',
        clubs: '♣',
        hearts: '♥',
        diamonds: '♦'
    }
    let classColor = '';
    if (props.cardValue[0] === 'hearts' || props.cardValue[0] === 'diamonds') {
        classColor = 'classColorRed';
    }

    return (
        <div className="card">
            <div className={classColor}> {gameCardSuits[props.cardValue[0]]}</div>
            <div className={classColor}>{props.cardValue[props.cardValue.length - 1]}</div>
            <div className={classColor}> {gameCardSuits[props.cardValue[0]]}</div>
        </div>
    );
};

export default Card;