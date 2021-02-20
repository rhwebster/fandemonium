import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { checkinStadium } from '../../store/stadium';
import Marker from './Marker';
import { useSelector, useDispatch } from 'react-redux';
import { getStadiums, userStadiums } from '../../store/stadium';
import './map.css'


export default function Map() {
    // const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const location = { lat: 38.1848545, lng: -96.743244 }
    const zoomlevel = 4;
    const authenticate = useSelector((state) => state.session.authenticate);
    const stadiums = useSelector((state) => state.stadiums.stadiums);
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
                        <Marker
                            id={stadium.id}
                            img={stadium.image}
                            name={stadium.name}
                            city={stadium.city_st}
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