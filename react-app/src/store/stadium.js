const SET_STADIUMS = "stadium/SET_STADIUMS";
const USER_STADIUMS = "stadium/USER_STADIUMS";

export const setStadiums = (stadiums) => {
    return {
        type: SET_STADIUMS,
        stadiums
    };
};

export const setUserStadiums = (visited) => {
    return {
        type: USER_STADIUMS,
        visited
    };
};

export const getStadiums = () => async (dispatch) => {
    const res = await fetch(`api/stadiums/`)
    let data = await res.json();
    dispatch(setStadiums(data.visited_stadiums));
};

export const userStadiums = (userId) => async (dispatch) => {
    const res = await fetch(`api/stadiums/${userId}`)
    let data = await res.json();
    dispatch(setUserStadiums(data.stadiums));
}

const initialState = {stadiums: []};

const stadiumReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_STADIUMS:
            newState = Object.assign({}, state);
            newState.stadiums = action.stadiums;
            return newState;
        case USER_STADIUMS:
            newState = Object.assign({}, state);
            newState.visited = action.visited;
            return newState;
        default:
            return state;
    };
};

export default stadiumReducer;