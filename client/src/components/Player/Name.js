import React from 'react';

const Name = (props) => {
    return (
        <div className="player-name">
            {props.nameData}
        </div>
    );
};

export default Name;