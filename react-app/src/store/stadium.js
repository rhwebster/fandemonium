const SET_STADIUMS = "stadium/SET_STADIUMS";
const USER_STADIUMS = "stadium/USER_STADIUMS";
const ADD_VISITED = 'stadiums/addVisited';

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

const addCheckin = (data) => {
    return {
        type: ADD_VISITED,
        data,
    };
};

export const getStadiums = () => async (dispatch) => {
    const res = await fetch(`/api/stadiums/`);
    let data = await res.json();
    dispatch(setStadiums(data.stadiums));
};

export const userStadiums = (userId) => async (dispatch) => {
    const res = await fetch(`/api/stadiums/${userId}`)
    let data = await res.json();
    dispatch(setUserStadiums(data.visited));
}

export const checkinStadium = (formObj) => async dispatch => {
    const { id, stadium } = formObj;
    const formData = { id, stadium };

    const res = await fetch(`/api/users/${id}/checkin`, {
        method: 'POST',
        body: JSON.stringify({formData})
    });
    dispatch(addCheckin(res));
    return res;
};

const initialState = {stadiums: [], visited: []};

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
        case ADD_VISITED:
            newState = Object.assign({}, state);
            newState.data = action.data
            return newState;
        default:
            return state;
    };
};

export default stadiumReducer;