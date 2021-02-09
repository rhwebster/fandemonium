import React, { userState, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const StadiumMap = ({}) => {

    const mapCenter = useState({ lat: 36.6848545, lon: -96.743244})
    return (
        <>
            <GoogleMap zoom={5} center={mapCenter}></GoogleMap>
        </>
    )
};

export default StadiumMap;