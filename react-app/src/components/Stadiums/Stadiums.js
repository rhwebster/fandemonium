import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from '../Map/Map';
import VisitedMap from '../Map/VisitedMap';
import { getStadiums, userStadiums, checkinStadium } from '../../store/stadium';
import Stadium from './Stadium';
import './stadiums.css';
import { setUser } from '../../store/session';
import { getAllTeams } from '../../store/teams';
import TeamPicker from '../Teams/teampicker';

export default function Stadiums({...props}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const authenticate = useSelector(state => state.session.authenticate);

    useEffect(() => {
        // if (user) {
        //     console.log('user ~>', user.id)
        //     await dispatch(userStadiums(user.id));
        // }
        dispatch(getStadiums());
    }, []);

    const stadiums = useSelector(state => state.stadiums.stadiums);
    const visited = useSelector(state => state.stadiums.visited);
    const [showAll, setShowAll] = useState(true)

    const userId = useSelector((state) => {
        if (state.session.user) {
            return state.session.user.id
        }
    });

    const checkIn = (stadiumId) => {
        dispatch(checkinStadium({
            id: userId,
            stadium: stadiumId,
        }))
    };

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
                            <div id='stadium-div'>
                                <img src={stadium.image}></img>
                                <div id='stadium-name'>{stadium.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}