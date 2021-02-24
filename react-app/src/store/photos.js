const SET_NEW_PHOTO = 'photos/setNewPhoto';
const SET_PHOTOS = 'photos/setPhotos';
const NEW_SUBMISSION = 'photos/newSubmission';


const setPhoto = (file) => {
    return {
        type: SET_NEW_PHOTO,
        payload: file,
    };
};

const setPhotos = (data) => {
    return {
        type: SET_PHOTOS,
        payload: data,
    }
};

export const newSubmission = (photoData) => {
    return {
        type: NEW_SUBMISSION,
        photoData: photoData,
    }
}

export const getPhotos = (id) => async dispatch => {
    const response = await fetch(`/api/photos/${id}/`);
    if (response.ok) {
        let data = await response.json()
        dispatch(setPhotos(data.photos));
    }
};

export const addPhoto = (file) => async (dispatch) => {
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch(`api/users/photos/`, {
        method: 'POST',
        body: formData,
    });

    if (res.ok) {
        const data = await res.json();

        dispatch(setPhoto(data.file));
        return data;
    } else {
        console.error('error')
    }
};

export const addSubmission = (formObj) => async (dispatch) => {
    const { userId, photo, caption} = formObj;
    const formData = { userId, photo, caption };

    const res = await fetch(`/api/photos/${userId}/`, {
        method: "POST",
        body: JSON.stringify(formData),
    })

    dispatch(newSubmission(res));
    return res;
}


const initialState = { photos: [] };

const photoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case NEW_SUBMISSION:
            return { ...state, [action.photoData]: action.photoData };
        case SET_NEW_PHOTO:
            return {...state, file: action.payload };
        case SET_PHOTOS:
            newState = Object.assign({}, state);
            newState.photos = action.payload;
            return newState;
        default:
            return state;
    }
};

export default photoReducer;

