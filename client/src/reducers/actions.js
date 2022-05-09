import {createAction} from "redux-actions";
import {token} from "./selectors";

const createRequestAction = (type, payloadCreator) => {
    const action = createAction(type, payloadCreator);
    action.success = type + '_SUCCESS';
    action.fail = type + '_FAIL';

    return action;
}

const middlewareConfig = {
    interceptors: {
        request: [
            function ({token}, req) {
                req.headers["Authorization"] = token;
            }
        ]
    }
}

// console.log(middlewareConfig)
export const game = createRequestAction('GAME', () => ({
    request: {
        method: 'post',
        url: '/api/game',
        // middlewareConfig
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    }
}));

export const hit = createRequestAction('HIT', (token) => ({
    request: {
        method: 'post',
        url: '/api/hit',
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    }
}));

export const stand = createRequestAction('STAND', () => ({
    request: {
        method: 'post',
        url: '/api/stand',
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    }
}));

export const restart = createRequestAction('RESTART', () => ({
    request: {
        method: 'post',
        url: '/api/restart',
        headers: {
            Authorization: localStorage.getItem('token'),
        },

    }
}));

export const login = createRequestAction('LOGIN', (newPlayers) => ({
    request: {
        method: 'post',
        url: '/api/login',
        data: {
            players: newPlayers,
        },
    }
}));