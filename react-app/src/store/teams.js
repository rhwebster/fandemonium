const GET_TEAMS = "teams/GET_TEAMS";
const SET_TEAM = "teams/SET_TEAM";
const ADD_FAVORITE_TEAM = 'teams/addFavoriteTeam'

export const setTeam = (team) => {
    return {
        type: SET_TEAM,
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

export const getTeam = (id) => async (dispatch) => {
    const res = await fetch(`/api/teams/${id}`);
    let data = await res.json();
    dispatch(setTeam(data.team));
}

export const addFavoriteTeam = (formObj) => async (dispatch) => {
    const { id, favoriteTeam } = formObj;
    const formData = { id, favoriteTeam };

    const res = await fetch(`/api/users/${id}/favorite`, {
        method: "POST",
        body: JSON.stringify(formData),
    });

    dispatch(setFavoriteTeam(res));
    return res
};

const initialState = {teams: [], team: []};

const TeamsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_TEAMS:
            newState = Object.assign({}, state);
            newState.teams = action.teams;
            return newState;
        case SET_TEAM:
            newState = Object.assign({}, state);
            newState.team = action.team;
            return newState;
        case ADD_FAVORITE_TEAM:
            newState = Object.assign({}, state);
            newState.team = action.team;
        default:
            return state;
    }
}

export default TeamsReducer;