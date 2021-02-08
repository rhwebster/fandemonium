const SET_PHOTO = 'session/setPhoto';
const SET_NEW_PHOTO = 'session/setNewPhoto'

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

export const addPhotos = (formObj) => async (dispatch) => {

    const { userId, gameId, image, caption } = formObj;
    const formData = { userId, gameId, image, caption }

    const res = await fetch(`/api/`)

}

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

