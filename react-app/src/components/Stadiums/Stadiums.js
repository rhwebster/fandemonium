import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from '../Map/Map';
import { getStadiums, userStadiums } from '../../store/stadium';
import Stadium from './Stadium';
import './stadiums.css';

export default function Stadiums({...props}) {
    const dispatch = useDispatch();
    const stadiums = useSelector(state => state.stadiums.stadiums)
    const visited = useSelector(state => state.stadiums.visited);
    useEffect(() => {
        dispatch(getStadiums());
        dispatch(userStadiums());
    }, []);

    return (
        <>
            <Map />
            <div className='stadium-list'>
                {stadiums && stadiums.map(stadium => {
                    return (
                        <>
                            <Stadium name={stadium.name} image={stadium.image} />
                        </>
                    )
                })}
            </div>
        </>
    )
}