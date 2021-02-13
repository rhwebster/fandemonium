const SET_TEAMS = "teams/Teams";
const GET_TEAMS = "team/GET_TEAMS"

export const setTeams = (teams) => {
    return {
        type: SET_TEAMS,
        teams
    };
};

export const getTeams = (teams) => {
    return{
        type: GET_TEAMS,
        teams
    };
};

export const getAllTeams = () => async (dispatch) => {
    console.log('getAllTeams running')
    const res = await fetch(`/api/teams/`);
    let data = await res.json();
    dispatch(getTeams(data.teams));
}

const initialState = {teams: []};

const TeamsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_TEAMS:
            newState = Object.assign({}, state);
            newState.teams = action.teams;
            return newState;
        default:
            return state;
    }
}

export default TeamsReducer;