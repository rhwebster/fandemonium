import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../../store/photos';
import { Modal } from '../../context/Modal';
import UploadPhotoForm from './PhotoUploadForm';
import SinglePhoto from './singlePhoto';

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
                <button onClick={() => {
                    setShowModal(true)
                }}>Upload New Photo</button>
                {showModal && (
                    <Modal onMouseDown={() => setShowModal(false)}>
                        <UploadPhotoForm />
                    </Modal>
                )}
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