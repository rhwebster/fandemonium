import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './Marker';
import { useSelector, useDispatch } from 'react-redux';
import { getStadiums } from '../../store/stadium';
import './map.css'


const Map = () => {
    const location = { lat: 36.6848545, lng: -96.743244 }
    const zoomlevel = 4
    const dispatch = useDispatch();
    const authenticate = useSelector((state) => state.session.authenticate);
    const stadiums = useSelector((state) => state.stadiums.stadiums)

    useEffect(() => {
        dispatch(getStadiums());
    },[]);

    const { GOOGLE_MAP_API_KEY } = process.env;

    return (
        <div className='map'>
            <div className='google-map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
                    defaultCenter={location}
                    defaultZoom={zoomlevel}
                >
                    <LocationPin
                        lat={40.829643}
                        lng={-73.926175}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
};

export default Map;