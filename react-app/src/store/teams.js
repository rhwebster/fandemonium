const GET_TEAMS = "teams/GET_TEAMS";
const SET_FAVTEAM = "teams/SET_FAVTEAM";
const ADD_FAVORITE_TEAM = 'teams/addFavoriteTeam'

export const setFavTeam = (team) => {
    return {
        type: SET_FAVTEAM,
        team
    };
};

export const getTeams = (teams) => {
    return{
        type: GET_TEAMS,
        teams
    };
};

const setFavoriteTeam = (team) => ({
    type: ADD_FAVORITE_TEAM,
    payload: team
});

export const getAllTeams = () => async (dispatch) => {
    const res = await fetch(`/api/teams/`);
    let data = await res.json();
    dispatch(getTeams(data.teams));
}

export const getFavoriteTeam = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/favorite`);
    let data = await res.json();
    dispatch(setFavTeam(data));
}

export const addFavoriteTeam = (formObj) => async (dispatch) => {
    const { id, favoriteTeamId } = formObj;
    const formData = { id, favoriteTeamId };
    const res = await fetch(`/api/users/${id}/favorite`, {
        method: "PATCH",
        body: JSON.stringify(formData),
    });
    const data = await res.json();
    dispatch(setFavoriteTeam(data));
    return res
};

const initialState = {teams: [], team: {}};

const TeamsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_TEAMS:
            newState = Object.assign({}, state);
            newState.teams = action.teams;
            return newState;
        case SET_FAVTEAM:
            newState = Object.assign({}, state);
            newState.team = action.team;
            return newState;
        case ADD_FAVORITE_TEAM:
            newState = Object.assign({}, state);
            newState.team = action.payload;
            return newState;
        default:
            return state;
    }
}

export default TeamsReducer;