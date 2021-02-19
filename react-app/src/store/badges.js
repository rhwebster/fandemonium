const SET_BADGES = "badges/SET_BADGES";
const USER_BADGES = "badges/USER_BADGES";

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

export const getBadges = () => async (dispatch) => {
    const res = await fetch(`/api/badges/`)
    let data = await res.json();
    dispatch(setBadges(data.badges));
};

export const userBadges = (userId) => async (dispatch) => {
    console.log('badges here')
    const res = await fetch(`/api/badges/${userId}`)
    let data = await res.json();
    dispatch(setUserBadges(data.earned));
}

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
        default:
            return state;
    };
};

export default badgeReducer;