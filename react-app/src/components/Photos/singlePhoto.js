import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPhotos } from '../../store/photos';
import UploadPhotoForm from './photoUpload';

const SinglePhoto = ({ image, caption }) => {
    return (
        <>
            <div style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
            <div id='caption'>{caption}</div>
        </>
    );
};

export default SinglePhoto;