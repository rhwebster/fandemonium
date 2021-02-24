import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../../store/photos';
import { Modal } from '../../context/Modal';
import UploadPhotoForm from './PhotoUploadForm';
import SinglePhoto from './singlePhoto';
import './photo.css';

const Photos = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const [showModal, setShowModal] = useState(false);

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
                <button className='photo-upload-button' onClick={() => {
                    setShowModal(true)
                }}>Upload New Photo</button>
                {showModal && (
                    <Modal onMouseDown={() => setShowModal(false)}>
                        <UploadPhotoForm />
                    </Modal>
                )}
                <main className='main-photo-body'>
                    {photos && photos.map(photo => {
                        return (
                            <SinglePhoto id={photo.id} image={photo.image} caption={photo.caption} />
                        )
                    })}
                </main>
            </div>
        </>
    );
};

export default Photos;