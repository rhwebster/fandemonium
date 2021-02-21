import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPhotos } from '../../store/photos';
import UploadPhotoForm from './photoUpload';
import SinglePhoto from './singlePhoto';

const Photos = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        if (user) {
            dispatch(getPhotos(user.id))
        }
    }, [user]);

    const authenticate = useSelector((state) => state.session.authenticate);
    const photos = useSelector((state) => state.photos.photos);

    if (!authenticate) return null;

    return (
        <>
            <div className='wrapper'>
                <UploadPhotoForm />
                <main className='main'>
                    {photos.map(url => {
                        return (
                            <SinglePhoto />
                        )
                    })}
                </main>
            </div>
        </>
    );
};

export default Photos;