const SET_STADIUMS = "stadium/SET_STADIUMS";

export const setStadiums = (stadiums) => {
    return {
        type: SET_STADIUMS,
        stadiums
    };
};

export const getStadiums = () => async (dispatch) => {

    const res = await fetch(`api/stadiums/`)
    let data = await res.json();
    dispatch(setStadiums(data.stadiums));
};

const initialState = {stadiums: []};

const stadiumReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_STADIUMS:
            newState = Object.assign({}, state);
            newState.stadiums = action.stadiums;
            return newState;
        default:
            return state;
    };
};

export default stadiumReducer;