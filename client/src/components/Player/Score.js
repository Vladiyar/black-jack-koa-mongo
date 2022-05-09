import React from 'react';

const Score = (props) => {
    return (
        <div className="player-score">
            {props.scoreData}
        </div>
    );
};

export default Score;