import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './Marker';
import { useSelector, useDispatch } from 'react-redux';
import { getStadiums, userStadiums } from '../../store/stadium';
import './map.css'


export default function VisitedMap() {
    const dispatch = useDispatch();
    const location = { lat: 36.6848545, lng: -96.743244 }
    const zoomlevel = 4;
    const authenticate = useSelector((state) => state.session.authenticate);
    const visited = useSelector((state) => state.stadiums.visited);
    
    useEffect(() => {
        dispatch(userStadiums());
    }, []);

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
                        {visited && visited.map(stadium => {
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