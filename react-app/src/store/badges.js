const SET_BADGES = "badges/SET_BADGES";
const USER_BADGES = "badges/USER_BADGES";
const ADD_BADGE = "badges/ADD_BADGE"

export const setBadges = (badges) => {
    return {
        type: SET_BADGES,
        badges
    }
};

export const setUserBadges = (earned) => {
    return {
        type: USER_BADGES,
        earned
    }
};

const addBadge = (data) => {
    return {
        type: ADD_BADGE,
        data,
    };
};

export const getBadges = () => async (dispatch) => {
    const res = await fetch(`/api/badges/`)
    let data = await res.json();
    dispatch(setBadges(data.badges));
};

export const userBadges = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/badges/`)
    let data = await res.json();
    dispatch(setUserBadges(data.earned));
}

export const newBadge = (formObj) => async dispatch => {
    const { id, badgeId } = formObj;
    const formData = { id, badgeId };

    const res = await fetch(`/api/users/${id}/badges/`, {
        method: 'POST',
        body: JSON.stringify(formData)
    });
    dispatch(addBadge(res));
    return res;
};

const initialState = {badges: [], earned: []};

const badgeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_BADGES:
            newState = Object.assign({}, state);
            newState.badges = action.badges;
            return newState;
        case USER_BADGES:
            newState = Object.assign({}, state);
            newState.earned = action.earned;
            return newState;
        case ADD_BADGE:
            newState = Object.assign({}, state);
            newState.data = action.data
            return newState;
        default:
            return state;
    };
};

export default badgeReducer;