const SET_PHOTO = 'session/setPhoto';
const SET_NEW_PHOTO = 'session/setNewPhoto'
const SET_PROFILE_PIC = 'session/setProfilePic';

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

const setProfilePic = (file) => ({
    type: SET_PROFILE_PIC,
    payload: file
});

export const setPic = (file) => async (dispatch) => {
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch(`api/user/photos`, {
        method: 'POST',
        body: formData,
    });

    if (res.ok) {
        const data = await res.json();

        dispatch(setProfilePic(data.file));
        return data;
    } else {
        console.log('error')
    }
};

export const addProfPhoto = (formObj) => async (dispatch) => {

    const { id, photo } = formObj;
    const formData = { id, photo }

    const res = await fetch(`/api/users/${id}/photo`, {
        method: "PATCH",
        body: JSON.stringify(formData,)
    });

    dispatch(setProfilePic(res))
    return res
};

const initialState = { photos: [] };

const photoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_PHOTO:
            newState = Object.assign({}, state);
            newState.photos = action.payload;
            return newState;
        case SET_PROFILE_PIC:
            return { ...state, file: action.payload };
        default:
            return state;
    }
};

export default photoReducer;

