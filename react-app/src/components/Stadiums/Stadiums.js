import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from '../Map/Map';
import VisitedMap from '../Map/VisitedMap';
import { getStadiums, userStadiums, checkinStadium } from '../../store/stadium';
import Stadium from './Stadium';
import './stadiums.css';

export default function Stadiums({...props}) {
    const dispatch = useDispatch();
    const authenticate = useSelector(state => state.session.authenticate);

    useEffect(() => {
        dispatch(getStadiums());
    }, []);

    const stadiums = useSelector(state => state.stadiums.stadiums);
    const [showAll, setShowAll] = useState(true)

    const userId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.id
        }
    });

    const visited = useEffect( async() => {
        await dispatch(userStadiums(userId));
        console.log('list of stadiums ~~>', visited);
    }, []);

    if (!authenticate) return null;

    return (
        <div id='stadium-page-body' >
            <div className='header'>
                <h2>Check Into A Ballpark</h2>
            </div>
            {showAll ? (<Map />) : (<VisitedMap />)}
            <div className='button>'>
                <button onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Visited Stadiums' : 'Show All Stadiums'}</button>
            </div>
            <div className='stadium-list'>
                <div className='stadium-icons'>
                    {stadiums && stadiums.map(stadium => {
                        return (
                            <Stadium image={stadium.image} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}