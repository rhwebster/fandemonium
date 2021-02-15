import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import LocationPin from './Marker';
import { useSelector, useDispatch } from 'react-redux';
import { getStadiums, userStadiums } from '../../store/stadium';
import './map.css'


export default function Map() {
    const dispatch = useDispatch();
    const location = { lat: 36.6848545, lng: -96.743244 }
    const zoomlevel = 4;
    const authenticate = useSelector((state) => state.session.authenticate);
    const stadiums = useSelector((state) => state.stadiums.stadiums);
    const visited = useSelector((state) => state.stadiums.stadiums);
    // useEffect(() => {
    //     dispatch(getStadiums());
    // }, []);
    // useEffect(() => {
    //     dispatch(userStadiums());
    // }, []);

    if (!authenticate) {
        return null;
    };
    

    const MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY
    
    return (
        <>
        <div className='map'>
            <div className='google-map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: MAP_KEY }}
                    defaultCenter={location}
                    defaultZoom={zoomlevel}
                >
                {stadiums && stadiums.map(stadium => {
                    return (
                        <LocationPin
                            lat={stadium.lat}
                            lng={stadium.lng}
                        />
                    )       
                })}
                </GoogleMapReact>
            </div>
        </div>
        </>
    )
};