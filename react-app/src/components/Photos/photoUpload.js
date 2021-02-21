import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './index.css';


export default function UploadPhotoForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [photo, setPhoto] = useState({ name: null })
    const [imgPreview, setImagePreview] = useState(null);
    const user = useSelector(state => state.session.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setPic(photo))
            .then((file) => {
                dispatch(addProfPic({
                    id: user.id,
                    photo: file.output,
                }));
            })
            .catch((error) => {
                console.log('uh oh', error)
            });
        setPhoto(null);
    }

    const uploadPhoto = (e) => {
        const file = e.target.files[0];
        if (file) setPhoto(file);
        const fileReader = new FileReader();
        if (file) {
            fileReader.readAsDataURL(file);
        }
        fileReader.onloadend = () => {
            setImagePreview(fileReader.result);
        };
    };

    return (
        <div id='photo-upload-form'>
            <form onSubmit={handleSubmit}>
                <label className='photo-upload'></label>
                <br></br>
                <input onChange={uploadPhoto} type='file' name='user-photo' />
                <button className='form-btn-upload' type='submit'>Upload Photo</button>
                <button
                    className="contact-form-btn-submit"
                    type="submit"
                >Submit</button>
            </form>
        </div>
    )

}