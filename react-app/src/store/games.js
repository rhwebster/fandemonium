const SET_GAMES = "game/SET_GAMES";
const USER_GAMES = "game/USER_GAMES";

export const setGames = (games) => {
    return {
        type: SET_GAMES,
        games
    }
};

export const setUserGames = (seen) => {
    return {
        type: USER_GAMES,
        seen
    }
};

export const getGames = () => async (dispatch) => {
    const res = await fetch(`api/games/`)
    let data = await res.json();
    dispatch(setGames(data.seen));
};

export const userGames = (userId) => async (dispatch) => {
    const res = await fetch(`api/games/${userId}`)
    let data = await res.json();
    dispatch(setUserGames(data.games));
}

const initialState = { games: [], seen: [] };

const gameReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_GAMES:
            newState = Object.assign({}, state);
            newState.games = action.games;
            return newState;
        case USER_GAMES:
            newState = Object.assign({}, state);
            newState.seen = action.seen;
            return newState;
        default:
            return state;
    };
};

export default gameReducer