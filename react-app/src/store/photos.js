const SET_PHOTO = 'session/setPhoto';

const setPhotos = (data) => {
    return {
        type: SET_PHOTO,
        payload: data,
    };
};

export const getPhotos = (userId) => async dispatch => {
    const response = await fetch(`api/photos/${userId}`);
    if (response.ok) {
        let data = await response.json()
        dispatch(setPhotos(data.photos));
    }
};

const initialState = { photos: [] };

const photoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_PHOTO:
            newState = Object.assign({}, state);
            newState.photos = action.payload;
            return newState;
        default:
            return state;
    }
};

export default photoReducer;

