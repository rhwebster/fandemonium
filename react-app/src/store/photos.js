const FETCH_PHOTOS = 'session/setPhoto';
const SET_NEW_PHOTO = 'session/setNewPhoto'
const SET_PHOTO = 'session/setProfilePic';

const setPhotos = (data) => {
    return {
        type: FETCH_PHOTOS,
        payload: data,
    };
};

export const getPhotos = (userId) => async dispatch => {
    const response = await fetch(`api/users/${userId}/photos/`);
    if (response.ok) {
        let data = await response.json()
        dispatch(setPhotos(data.photos));
    }
};

const setPhoto = (file) => ({
    type: SET_PHOTO,
    payload: file
});

export const setPic = (file) => async (dispatch) => {
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch(`api/user/photos/`, {
        method: 'POST',
        body: formData,
    });

    if (res.ok) {
        const data = await res.json();

        dispatch(setPhoto(data.file));
        return data;
    } else {
        console.log('error')
    }
};

export const addProfPic = (formObj) => async (dispatch) => {

    const { id, photo } = formObj;
    const formData = { id, photo }

    const res = await fetch(`/api/users/${id}/profpic`, {
        method: "PATCH",
        body: JSON.stringify(formData,)
    });

    dispatch(setPhoto(res))
    return res
};

const initialState = { photos: [] };

const photoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case FETCH_PHOTOS:
            newState = Object.assign({}, state);
            newState.photos = action.payload;
            return newState;
        case SET_PHOTO:
            return { ...state, file: action.payload };
        default:
            return state;
    }
};

export default photoReducer;

