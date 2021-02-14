import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from '../Map/Map';
import VisitedMap from '../Map/VisitedMap';
import { getStadiums, userStadiums } from '../../store/stadium';
import Stadium from './Stadium';
import './stadiums.css';

export default function Stadiums({...props}) {
    const dispatch = useDispatch();
    const stadiums = useSelector(state => state.stadiums.stadiums)
    const visited = useSelector(state => state.stadiums.visited);
    const [showAll, setShowAll] = useState(true)
    useEffect(() => {
        dispatch(getStadiums());
        dispatch(userStadiums());
    }, []);

    return (
        <>
            {showAll ? (<Map />) : (<VisitedMap />)}
            <div className='button>'>
                <button onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Visited Stadiums' : 'Show All Stadiums'}</button>
            </div>
            {showAll ? (
                <div className='stadium-list'>
                    {stadiums && stadiums.map(stadium => {
                        return (
                            <>
                                <Stadium name={stadium.name} image={stadium.image} />
                            </>
                        )
                    })}
                </div>
            ) : (
                <div className='visited-list'>
                    {visited && visited.map(stadium => {
                            return (
                                <>
                                    <Stadium name={stadium.name} image={stadium.image} />
                                </>
                            )
                        })}
                </div>
            )}
        </>
    )
}