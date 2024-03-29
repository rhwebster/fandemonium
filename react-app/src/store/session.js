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

export const signUp = (user) => async (dispatch) => {
    const {username, email, password} = user;
    const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(setUser(data));
        return null;
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occured. Please try again."]
    }
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { user: action.payload };
        case REMOVE_USER:
            return { user: null };
        default:
            return state;
    }
};

export default sessionReducer;