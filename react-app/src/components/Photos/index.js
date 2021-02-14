import React from 'react';

export default function PhotoUpload() {

    fileSelectedHandler = (e) => {
        
    }
    fileUploadHandler = () => {

    }
    return (
        <div className='upload-component'>
            <input type='file' onchange={}/>
            <button onClick={fileUploadHandler}>Upload</button>
        </div>
    )
}