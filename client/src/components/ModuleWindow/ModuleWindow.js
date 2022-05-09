import React from 'react';

const ModuleWindow = ({result, restart}) => {

    return (
        <div className={result ? "open-window" : "module-window"}>
            <div id="winner-info">{result}</div>
            <button id="play-again" className="play-again" onClick={restart}>Play Again</button>
        </div>
    );
};

export default ModuleWindow;