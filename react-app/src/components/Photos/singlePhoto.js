import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoto } from '../../store/photos';

const SinglePhoto = ({ id, image, caption }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    // const removePic = (value) => {
    //     dispatch(deletePhoto(user.id))
    // onClick = {(e) => removePic(e.target.value)}
    // }

    return (
        <>
            <div id='photo-body'>
                <img src={image} width='350px'/>
            </div>
            <button id='photo-delete-button' value={id}>Delete</button>
            <div id='caption'>{caption}</div>
        </>
    );
};

export default SinglePhoto;