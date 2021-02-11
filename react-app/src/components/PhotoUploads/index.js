import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';

function PhotoUpload({onNewImageBase64}) {
    const [images, setImages] = useState([]);

    const onChange = (imageList, addIndex) => {
        setImages(imageList);
        if (imageList[0]) {
            onNewImageBase64(imageList[0].data_url)
        } else {
            onNewImageBase64(null)
        }
    };

    return (
        <div>
            <ImageUploading
                value={images}
                onChange={onChange}
                maxNumber={1}
                dataURLKey='data_url'>
                    
                </ImageUploading>
        </div>
    )
};