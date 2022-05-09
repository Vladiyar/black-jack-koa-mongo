import React, {useEffect} from 'react';
import GameArea from "../../GameArea";
import Sidebar from "../../Sidebar";
import ModuleWindow from "../../ModuleWindow";
import {Navigate} from "react-router-dom";

const Game = ({result, fetched, token, game}) => {
    useEffect(() => {
        if (token) {
            game()
        }
    })
    if (!token) return <Navigate to="/login"/>
    if (!fetched) {
    return (
        <div className="container">
            <div className="loading"><p>Loading...</p></div>
        </div>
        )
    }
    return (
        <div className="container">
            <GameArea/>
            <Sidebar/>
            {result && <ModuleWindow />}
        </div>
    );
};

export default Game;