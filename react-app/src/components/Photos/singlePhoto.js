import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoto } from '../../store/photos';

const SinglePhoto = ({ id, image, caption }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const removePic = async (photoId) => {
        await dispatch(deletePhoto({
            id: user.id,
            photoId: photoId}))
        await window.location.reload(true);
    }

    return (
        <>
            <div id='photo-body'>
                <img src={image} width='350px'/>
            </div>
            <button id='photo-delete-button' onClick={(e) => removePic(id)}>Delete</button>
            <div id='caption'>{caption}</div>
        </>
    );
};

export default SinglePhoto;