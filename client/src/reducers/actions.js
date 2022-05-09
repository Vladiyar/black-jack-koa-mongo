import {createAction} from "redux-actions";

const createRequestAction = (type, payloadCreator) => {
    const action = createAction(type, payloadCreator);
    action.success = type + '_SUCCESS';
    action.fail = type + '_FAIL';

    return action;
}

export const game = createRequestAction('GAME', () => ({
    request: {
        method: 'post',
        url: '/api/game',
    }
}));

export const hit = createRequestAction('HIT', (token) => ({
    request: {
        method: 'post',
        url: '/api/hit',
    }
}));

export const stand = createRequestAction('STAND', () => ({
    request: {
        method: 'post',
        url: '/api/stand',
    }
}));

export const restart = createRequestAction('RESTART', () => ({
    request: {
        method: 'post',
        url: '/api/restart',
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