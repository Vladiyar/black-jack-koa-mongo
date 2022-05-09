import React from 'react';

const Sidebar = ({hit, stand}) => {
    return (
        <div className="sidebar">
            <div className="card-back"/>
            <button onClick={hit}>Hit</button>
            <button onClick={stand}>Stand</button>
        </div>
    );
};

export default Sidebar;