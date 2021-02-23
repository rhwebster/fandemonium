import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import VisitedMarker from './VisitedMarker';
import { useSelector, useDispatch } from 'react-redux';
import { getStadiums, userStadiums } from '../../store/stadium';
import './map.css'


export default function VisitedMap({visited, unseen}) {
    const dispatch = useDispatch();
    const location = { lat: 38.1848545, lng: -96.743244 }
    const zoomlevel = 4;
    const authenticate = useSelector((state) => state.session.authenticate);
    // const userId = useSelector((state) => {
    //     if (state.session.user) {
    //         return state.session.user.id
    //     }
    // })
    // useEffect(() => {
    //     dispatch(userStadiums(userId));
    // }, []);
    // const visited = useSelector((state) => state.stadiums.visited)

    
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
                                <VisitedMarker
                                    id={stadium.id}
                                    img={stadium.image}
                                    name={stadium.name}
                                    city={stadium.city_st}
                                    lat={stadium.lat}
                                    lng={stadium.lng}
                                />
                            )
                        })}
                        {unseen && unseen.map(stadium => {
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