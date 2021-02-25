import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, addSubmission } from '../../store/photos';
import './photo.css';


export default function UploadPhotoForm() {
    const dispatch = useDispatch();
    const [pic, setPic] = useState({ 'name': null });
    const [caption, setCaption] = useState('');
    const [imgPreview, setImagePreview] = useState(null);
    const user = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addPhoto(pic))
            .then(file => {
                dispatch(addSubmission({userId: user.id, photo: file.output, caption}))
            }).catch(error => {
                console.error('Error:', error)
            });
        setPic(null);
        window.location.reload(true);
    };

    const uploadPhoto = (e) => {
        const file = e.target.files[0];
        if (file) setPic(file);
        const fileReader = new FileReader();
        if (file) {
            fileReader.readAsDataURL(file);
        }
        fileReader.onloadend = () => {
            setImagePreview(fileReader.result);
        }
    };

    return (
        <div id='photo-upload-form' style={{ backgroundColor: 'black' }}>
            <form id='upload-form' onSubmit={handleSubmit}>
                <button className='photo-upload-btn'>Upload Photo
                    <input onChange={uploadPhoto} type='file' name='user-photo' />
                </button>
                <textarea className='caption' value={caption}
                    onChange={(e) => setCaption(e.target.value)}></textarea>
                <button
                    className="contact-form-btn-submit"
                    type="submit">Submit</button>
            </form>
        </div>
    )

}