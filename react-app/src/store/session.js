const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

const removeUser = () => ({
    type: REMOVE_USER
});

export const authenticate = () => async dispatch => {
    const res = await fetch('/api/auth/', {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (res.ok) {
        const data = await res.json();
        if (data.errors) {
            return
        }

        dispatch(setUser(data));
    }
};

export const login = (user) => async (dispatch) => {
    const { email, password } = user;
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    if (res.ok) {
        const data = await res.json()
        dispatch(setUser(data));
        return null;
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        } 
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const logout = () => async (dispatch) => {
    const res = await fetch('/api/auth/logout', {
        method: 'DELETE'
    });
    if (res.ok) {
        dispatch(removeUser());
    }
};



const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            newState.authenticate = true;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state, { user: null, authenticate: false });
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;