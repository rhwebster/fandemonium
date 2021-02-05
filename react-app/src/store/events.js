const SET_EVENTS = "events/SET_EVENTS";
const USER_EVENTS = "events/USER_EVENTS";

export const setEvents = (events) => {
    return {
        type: SET_EVENTS,
        events
    }
};

export const setUserEvents = (witnessed) => {
    return {
        type: USER_EVENTS,
        witnessed
    }
};

export const getEvents = () => async (dispatch) => {
    const res = await fetch(`api/events/`)
    let data = await res.json();
    dispatch(setEvents(data.witnessed));
};

export const userEvents = (userId) => async (dispatch) => {
    const res = await fetch(`api/events/${userId}`)
    let data = await res.json();
    dispatch(setUserEvents(data.events));
}

const initialState = { events: [], witnessed: [] };

const eventReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_EVENTS:
            newState = Object.assign({}, state);
            newState.events = action.events;
            return newState;
        case USER_EVENTS:
            newState = Object.assign({}, state);
            newState.witnessed = action.witnessed;
            return newState;
        default:
            return state;
    };
};

export default eventReducer