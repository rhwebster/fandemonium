const GET_TEAMS = "teams/GET_TEAMS";
const SET_TEAM = "team/SET_TEAM";

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
        default:
            return state;
    }
}

export default TeamsReducer;